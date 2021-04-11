import Tag from '@entities/Tag';
import IFavorite from '@domain/entities/IFavorite';

export default interface ITagsRepository {
  attach(tags: string[], favorite: IFavorite): Promise<Tag[]>;
}
