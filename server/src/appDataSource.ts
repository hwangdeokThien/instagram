import { DataSource } from 'typeorm'
import { User } from './models/user'
import { Post } from './models/post'
import { PostImage } from './models/image'

const postgresDataSource = new DataSource({
  type: "postgres",
  database: "instagram",
  username: process.env.DB_USERNAME_DEV,
  password: process.env.DB_PASSWORD_DEV,
  logging: true,
  synchronize: true,
  entities: [User, Post, PostImage]
})

export { postgresDataSource }