import { getRepository, Repository } from 'typeorm';

import Favorite from '@entities/Favorite';

import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import IFavorite from '@domain/entities/IFavorite';
import IUser from '@domain/entities/IUser';
import IRepository from '@domain/entities/IRepository';

import {
  PaginationParams,
  PaginatedResponse,
} from '@domain/repositories/IRepository';

export default class FavoritesRepository implements IFavoritesRepository {
  private repository: Repository<Favorite>;

  constructor() {
    this.repository = getRepository(Favorite);
  }

  private static normalizeValues(
    user: IUser,
    repositories: IRepository[]
  ): IFavorite[] {
    return repositories.map(
      (repository: IRepository) =>
        ({
          user,
          repository,
        } as IFavorite)
    );
  }

  private async unlink(linked: Favorite[], user: IUser) {
    await this.repository
      .createQueryBuilder()
      .delete()
      .where('user_id = :user', { user: user.id })
      .andWhere('id NOT IN (:...values)', {
        values: linked.map((favorite) => favorite.id),
      })
      .execute();
  }

  public async link(
    user: IUser,
    repositories: IRepository[]
  ): Promise<Favorite[]> {
    const query = await this.repository
      .createQueryBuilder()
      .insert()
      .into(Favorite)
      .values(FavoritesRepository.normalizeValues(user, repositories))
      .orUpdate({
        conflict_target: ['user_id', 'repository_id'],
        overwrite: ['user_id', 'repository_id'],
      })
      .returning('*')
      .execute();

    const linked = query.generatedMaps as Favorite[];

    await this.unlink(linked, user);

    return linked;
  }

  public async getPaginated(
    where?: Record<string, unknown>,
    params?: PaginationParams
  ): Promise<PaginatedResponse<Favorite>> {
    const query = await this.repository.find({
      skip: params?.skip ?? 0,
      take: params?.take ?? 10,
      where,
      relations: ['tags', 'repository'],
    });

    return {
      data: query as Favorite[],
    } as PaginatedResponse<Favorite>;
  }

  public async findById(
    id: string,
    user: string
  ): Promise<Favorite | undefined> {
    const query = await this.repository.findOne({
      where: { id, user },
      relations: ['tags', 'repository'],
    });

    return query as Favorite;
  }
}
