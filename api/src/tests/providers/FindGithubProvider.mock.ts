import { injectable } from 'tsyringe';
import faker from 'faker';

import { AxiosResponse } from 'axios';

import IRepository from '@domain/entities/IRepository';
import IUser from '@domain/entities/IUser';
import IFindGithubProvider from '@domain/providers/IFindGithubProvider';

@injectable()
export default class FindGithubProvider implements IFindGithubProvider {
  userResponse = {
    data: {
      username: faker.internet.userName(),
      github_id: faker.datatype.uuid(),
    } as IUser,
  };

  starredResponse = {
    data: [
      {
        github_id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        description: faker.random.word(),
        url: faker.internet.url(),
        language: faker.random.word(),
      } as IRepository,
    ],
  };

  public async starsFromUsername(): Promise<AxiosResponse<IRepository[]>> {
    return this.starredResponse as AxiosResponse<IRepository[]>;
  }

  public async detailsFromUsername(
    username: string
  ): Promise<AxiosResponse<IUser>> {
    this.userResponse.data.username = username;
    return this.userResponse as AxiosResponse<IUser>;
  }
}
