import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostImage } from "./image";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  caption!: string

  @OneToMany(() => PostImage, (image) => image.post, {cascade: true})
  images: string

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date
}