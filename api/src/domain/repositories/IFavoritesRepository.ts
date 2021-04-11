import IRepository from '@domain/entities/IRepository';
import IUser from '@domain/entities/IUser';
import Favorite from '@entities/Favorite';

import Repository from '@domain/repositories/IRepository';

export default interface IFavoritesRepository extends Repository<Favorite> {
  link(user: IUser, repositories: IRepository[]): Promise<Favorite[]>;
  findById(id: string, user_id: string): Promise<Favorite | undefined>;
}
