import Tag from '@entities/Tag';
import IFavorite from '@domain/entities/IFavorite';

import ITagsRepository from '@domain/repositories/ITagsRepository';

export default class TagsRepository implements ITagsRepository {
  result: Tag[] = [];

  private static normalizeValues(tags: string[], favorite: IFavorite): Tag[] {
    return tags.map(
      (name: string) =>
        ({
          name,
          favorite,
        } as Tag)
    );
  }

  public async attach(tags: string[], favorite: IFavorite): Promise<Tag[]> {
    const linked = TagsRepository.normalizeValues(tags, favorite);
    this.result = [...this.result, ...linked];

    return linked;
  }
}
