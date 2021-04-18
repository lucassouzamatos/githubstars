import User from '@entities/User';
import IUser from '@domain/entities/IUser';

export default interface IUsersRepository {
  create(user: IUser): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
}
