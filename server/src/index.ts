require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { postgresDataSource } from "./appDataSource"

postgresDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

const main = async () => {
  const app = express()

  app.listen(4000, () => console.log(`Server started on port 4000`))
} 

main().catch(error => console.log(error))