import IUser from '@domain/entities/IUser';
import IRepository from '@domain/entities/IRepository';
import ITag from '@domain/entities/ITag';

export default interface IFavorite {
  id?: string;
  user: IUser;
  repository: IRepository;
  tags?: ITag[];
  created_at?: Date;
  updated_at?: Date;
}
