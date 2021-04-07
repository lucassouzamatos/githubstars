import IRepository from '@domain/entities/IRepository';
import IUser from '@domain/entities/IUser';

import { AxiosResponse } from 'axios';

export default interface IFindGithubProvider {
  detailsFromUsername(username: string): Promise<AxiosResponse<IUser>>;
  starsFromUsername(username: string): Promise<AxiosResponse<IRepository[]>>;
}
