import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Favorite from "@entities/Favorite";

import ITag from "@domain/entities/ITag";

@Entity("tags")
export default class Tag implements ITag {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Favorite, (favorite) => favorite.tags)
  @JoinColumn({ name: "favorite_id", referencedColumnName: "id" })
  favorite: Favorite;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
