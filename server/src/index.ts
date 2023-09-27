require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import express, { json } from "express";
import { HelloResolver } from "./resolvers/hello";
import { postgresDataSource } from "./appDataSource";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { expressMiddleware } from "@apollo/server/express4";
import { UserResolver } from "./resolvers/user";

postgresDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
    }),
  });

  await apolloServer.start();

  app.use("/graphql", cors(), json(), expressMiddleware(apolloServer));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}/graphql`);
  });
};

main().catch((error) => console.log(error));
