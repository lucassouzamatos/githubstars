import IUser from '@domain/entities/IUser';
import IRepository from '@domain/entities/IRepository';

export default interface IFavorite {
  id: string;
  user: IUser;
  repository: IRepository;
  created_at: Date;
  updated_at: Date;
}
