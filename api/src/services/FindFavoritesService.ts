import { injectable, inject } from 'tsyringe';

import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import Favorite from '@entities/Favorite';

import { PaginatedResponse } from '@domain/repositories/IRepository';

interface IParams {
  userid?: string;
}

@injectable()
export default class FindFavoritesService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository
  ) {}

  public async execute({
    userid,
  }: IParams): Promise<PaginatedResponse<Favorite>> {
    if (!userid) {
      throw new Error('The user id must be defined');
    }

    return this.favoritesRepository.getPaginated({
      user: userid,
    });
  }
}
