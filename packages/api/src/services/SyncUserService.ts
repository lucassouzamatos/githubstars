import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import IUsersRepository from '@domain/repositories/IUsersRepository';
import IRepositoriesRepository from '@domain/repositories/IRepositoriesRepository';
import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import IFindGithubProvider from '@domain/providers/IFindGithubProvider';

import User from '@entities/User';
import IRepository from '@domain/entities/IRepository';
import NotFoundError from '@common/errors/NotFoundError';

interface IParams {
  username?: string;
}

@injectable()
export default class SyncUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('RepositoriesRepository')
    private repositoriesRepository: IRepositoriesRepository,

    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,

    @inject('FindGithubProvider')
    private findGithubProvider: IFindGithubProvider
  ) {}

  private async createUser(username: string): Promise<User> {
    const githubUser = await this.findGithubProvider.detailsFromUsername(
      username
    );
    const user = await this.usersRepository.create(githubUser.data);
    return user;
  }

  private async createRepositories(username: string): Promise<IRepository[]> {
    const githubStarred = await this.findGithubProvider.starsFromUsername(
      username
    );
    const repositories = await this.repositoriesRepository.createMany(
      githubStarred.data
    );
    return repositories;
  }

  public async execute({ username }: IParams): Promise<string | undefined> {
    if (!username) {
      throw new Error('The username must be defined');
    }

    try {
      const user = await this.createUser(username);
      const repositories = await this.createRepositories(username);

      await this.favoritesRepository.link(user, repositories);

      const token = sign({}, process.env.JWT_TOKEN as string, {
        subject: user.id,
      });

      return token;
    } catch {
      throw new NotFoundError('The user specified not found');
    }
  }
}
