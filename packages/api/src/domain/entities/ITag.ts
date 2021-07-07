import IFavorite from '@domain/entities/IFavorite';

export default interface ITag {
  id: string;
  name: string;
  favorite: IFavorite;
  created_at: Date;
  updated_at: Date;
}
