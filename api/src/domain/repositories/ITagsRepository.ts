import Tag from '@entities/Tag';
import Favorite from '@entities/Favorite';

export default interface ITagsRepository {
  attach(tags: string[], favorite: Favorite): Promise<Tag[]>;
}
