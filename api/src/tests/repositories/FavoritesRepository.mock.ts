import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import Favorite from '@entities/Favorite';
import IRepository from '@domain/entities/IRepository';
import IUser from '@domain/entities/IUser';
import { PaginatedResponse } from '@domain/repositories/IRepository';
import { FakeFavorite } from '@tests/factory/faker';

export default class FavoritesRepository implements IFavoritesRepository {
  result: Favorite[] = [];

  public static normalizeValues(
    user: IUser,
    repositories: IRepository[]
  ): Favorite[] {
    return repositories.map(
      (repository: IRepository) =>
        FakeFavorite({ user, repository }) as Favorite
    );
  }

  public async link(
    user: IUser,
    repositories: IRepository[]
  ): Promise<Favorite[]> {
    const linked = FavoritesRepository.normalizeValues(user, repositories);
    this.result = [...this.result, ...linked];

    return linked;
  }

  public async findById(id: string): Promise<Favorite | undefined> {
    return this.result.find((favorite) => favorite.id === id);
  }

  public async getPaginated(): Promise<PaginatedResponse<Favorite>> {
    return {
      data: this.result as Favorite[],
    } as PaginatedResponse<Favorite>;
  }
}
