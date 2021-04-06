import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  JoinTable,
} from "typeorm";

import User from "@entities/User";
import Repository from "@entities/Repository";
import Tag from "@entities/Tag";

import IFavorite from "@domain/entities/IFavorite";

@Entity("favorites")
export default class Favorite implements IFavorite {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @ManyToOne(() => Repository, (repository) => repository.favorites)
  @JoinColumn({ name: "repository_id", referencedColumnName: "id" })
  repository: Repository;

  @OneToMany(() => Tag, (tag) => tag.favorite)
  tags: Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
