import { injectable } from 'tsyringe';
import axios, { AxiosTransformer, AxiosResponse } from 'axios';

import IRepository from '@domain/entities/IRepository';
import IUser from '@domain/entities/IUser';
import IFindGithubProvider from '@domain/providers/IFindGithubProvider';
import GithubRepository from '@domain/github/IGithubRepository';
import GithubUser from '@domain/github/IGithubUser';

@injectable()
export default class FindGithubProvider implements IFindGithubProvider {
  baseUrl = process.env.GITHUB_API;

  private static transformRepository(
    response: GithubRepository[]
  ): IRepository[] {
    return response.map(
      (repository: GithubRepository) =>
        ({
          github_id: repository.id,
          name: repository.full_name,
          description: repository.description,
          url: repository.html_url,
          language: repository.language,
        } as IRepository)
    );
  }

  public async starsFromUsername(
    username: string
  ): Promise<AxiosResponse<IRepository[]>> {
    return axios.request({
      method: 'get',
      baseURL: this.baseUrl,
      url: `/users/${username}/starred?per_page=1000`,
      transformResponse: [
        ...(axios.defaults.transformResponse as AxiosTransformer[]),
        FindGithubProvider.transformRepository as AxiosTransformer,
      ],
    });
  }

  private static transformUser(response: GithubUser): IUser {
    return {
      username: response.login,
      github_id: response.id,
    } as IUser;
  }

  public async detailsFromUsername(
    username: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.request({
      method: 'get',
      baseURL: this.baseUrl,
      url: `/users/${username}`,
      transformResponse: [
        ...(axios.defaults.transformResponse as AxiosTransformer[]),
        FindGithubProvider.transformUser as AxiosTransformer,
      ],
    });
  }
}
