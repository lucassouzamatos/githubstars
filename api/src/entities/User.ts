import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Favorite from "@entities/Favorite";

import IUser from "@domain/entities/IUser";

@Entity("users")
export default class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  github_id: string;

  @PrimaryColumn()
  username: string;

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
