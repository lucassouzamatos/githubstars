import IRepositoriesRepository from '@domain/repositories/IRepositoriesRepository';
import Repository from '@entities/Repository';

export default class RepositoriesRepository implements IRepositoriesRepository {
  result: Repository[] = [];

  public async createMany(repositories: Repository[]): Promise<Repository[]> {
    this.result = [...this.result, ...repositories];
    return repositories;
  }
}
