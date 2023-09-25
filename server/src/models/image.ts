import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";

@Entity()
export class PostImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  imageUrl!: string;

  @ManyToOne(() => Post, (post) => post.images)
  post!: Post;
}