import faker from 'faker';

import IUsersRepository from '@domain/repositories/IUsersRepository';
import User from '@entities/User';

export default class UsersRepository implements IUsersRepository {
  result: User[] = [];

  public async create(user: User): Promise<User> {
    const add = { ...user, id: faker.datatype.uuid() };
    this.result = [...this.result, add];
    return add;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    return this.result.find((user) => user.username === username);
  }
}
