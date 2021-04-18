import { getRepository, Repository } from 'typeorm';

import ERepository from '@entities/Repository';
import IRepository from '@domain/entities/IRepository';
import IRepositoriesRepository from '@domain/repositories/IRepositoriesRepository';

export default class RepositoriesRepository implements IRepositoriesRepository {
  private repository: Repository<ERepository>;

  constructor() {
    this.repository = getRepository(ERepository);
  }

  public async createMany(repositories: IRepository[]): Promise<ERepository[]> {
    const query = await this.repository
      .createQueryBuilder()
      .insert()
      .into(ERepository)
      .values(repositories)
      .orUpdate({
        conflict_target: ['github_id'],
        overwrite: ['name', 'description', 'language'],
      })
      .returning('*')
      .execute();

    return query.generatedMaps as ERepository[];
  }
}
