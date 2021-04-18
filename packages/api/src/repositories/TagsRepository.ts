import { getRepository, Repository } from 'typeorm';

import Tag from '@entities/Tag';
import IFavorite from '@domain/entities/IFavorite';
import ITagsRepository from '@domain/repositories/ITagsRepository';

export default class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  private static normalizeValues(tags: string[], favorite: IFavorite): Tag[] {
    return tags.map(
      (name: string) =>
        ({
          name,
          favorite,
        } as Tag)
    );
  }

  private async detach(created: Tag[], favorite: IFavorite) {
    await this.repository
      .createQueryBuilder()
      .delete()
      .where('favorite_id = :favorite', { favorite: favorite.id })
      .where(`id NOT IN (:...values)`, { values: created.map((tag) => tag.id) })
      .execute();
  }

  public async attach(tags: string[], favorite: IFavorite): Promise<Tag[]> {
    const query = await this.repository
      .createQueryBuilder()
      .insert()
      .into(Tag)
      .values(TagsRepository.normalizeValues(tags, favorite))
      .returning('*')
      .execute();

    const created = query.generatedMaps as Tag[];

    await this.detach(created, favorite);
    return created;
  }
}
