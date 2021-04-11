import { injectable, inject } from 'tsyringe';

import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import ITagsRepository from '@domain/repositories/ITagsRepository';

import Favorite from '@entities/Favorite';

interface IParams {
  favorite_id: string;
  tags: string;
}

@injectable()
export default class AttachTagService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute({ favorite_id, tags }: IParams): Promise<Favorite> {
    const favorite = await this.favoritesRepository.findById(favorite_id);

    if (!favorite) {
      throw new Error('The favorite specified not exists');
    }

    const splitted = tags.split(',').map((tag) => tag.trim());
    await this.tagsRepository.attach(splitted, favorite);
    return favorite;
  }
}
