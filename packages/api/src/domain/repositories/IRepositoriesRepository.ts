import IRepository from '@domain/entities/IRepository';
import Repository from '@entities/Repository';

export default interface IRepositoriesRepository {
  createMany(repositories: IRepository[]): Promise<Repository[]>;
}
