import IFavorite from '@domain/entities/IFavorite';

export default interface IRepository {
  id?: string;
  description: string;
  github_id: string;
  url: string;
  name: string;
  language: string;
  favorites?: IFavorite[];
  created_at?: Date;
  updated_at?: Date;
}
