import { injectable, inject } from 'tsyringe';

import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import ITagsRepository from '@domain/repositories/ITagsRepository';
import Favorite from '@entities/Favorite';
import NotFoundError from '@common/errors/NotFoundError';

interface IParams {
  favorite_id: string;
  tags: string;
  user_id: string;
}

@injectable()
export default class AttachTagService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute({
    favorite_id,
    tags,
    user_id,
  }: IParams): Promise<Favorite | undefined> {
    const favorite = await this.favoritesRepository.findById(
      favorite_id,
      user_id
    );

    if (!favorite) {
      throw new NotFoundError('The favorite specified not exists');
    }

    const splitted = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => Boolean(tag));
    await this.tagsRepository.attach(splitted, favorite);
    return this.favoritesRepository.findById(favorite_id, user_id);
  }
}
