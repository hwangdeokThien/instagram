require("dotenv").config();
import "reflect-metadata";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import express, { json } from "express";
import MongoStore from "connect-mongo";
import session from "express-session";
import { HelloResolver } from "./resolvers/hello";
import { postgresDataSource } from "./appDataSource";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { expressMiddleware } from "@apollo/server/express4";
import { UserResolver } from "./resolvers/user";
import { COOKIE_NAME, __prod__ } from "./constants";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const main = async () => {
  postgresDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  const app = express();

  // session/cookie store
  const mongoUrl = process.env.MONGODB_URL || "";
  await mongoose.connect(mongoUrl);
  console.log("MongoDB connected!");
  app.use(
    session({
      name: COOKIE_NAME,
      secret: process.env.SESSION_SECRET_DEV_PROD as string,
      store: MongoStore.create({ mongoUrl }),
      cookie: {
        maxAge: 1000 * 60 * 60, // ms
        httpOnly: true, //js front end can not access the cookies
        secure: __prod__, //cookies only work in https
        sameSite: "lax", //protection against CSRF
      },
      saveUninitialized: false, // do not save empty session, from the start
      resave: false,
    })
  );

  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  const PORT = process.env.PORT || 4000;

  await apolloServer.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀  Server ready at http://localhost:${PORT}/`);
};

main().catch((error) => console.log(error));
