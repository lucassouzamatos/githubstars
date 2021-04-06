import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Favorite from "@entities/Favorite";

import IRepository from "@domain/entities/IRepository";

@Entity("repositories")
export default class Repository implements IRepository {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  github_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  language: string;

  @Column()
  url: string;

  @OneToMany(() => Favorite, (favorite) => favorite.repository)
  favorites: Favorite[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
