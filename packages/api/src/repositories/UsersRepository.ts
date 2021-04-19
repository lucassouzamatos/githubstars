import { getRepository, Repository } from 'typeorm';

import User from '@entities/User';
import IUser from '@domain/entities/IUser';
import IUsersRepository from '@domain/repositories/IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async create(user: IUser): Promise<User> {
    const query = await this.repository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .orUpdate({ conflict_target: ['github_id'], overwrite: ['github_id'] })
      .returning('*')
      .execute();

    return query.generatedMaps[0] as User;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { username } });
  }
}
