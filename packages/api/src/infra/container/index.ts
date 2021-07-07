import { container } from 'tsyringe';

import IUsersRepository from '@domain/repositories/IUsersRepository';
import UsersRepository from '@repositories/UsersRepository';

import ITagsRepository from '@domain/repositories/ITagsRepository';
import TagsRepository from '@repositories/TagsRepository';

import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import FavoritesRepository from '@repositories/FavoritesRepository';

import IRepositoriesRepository from '@domain/repositories/IRepositoriesRepository';
import RepositoriesRepository from '@repositories/RepositoriesRepository';

import IFindGithubProvider from '@domain/providers/IFindGithubProvider';
import FindGithubProvider from '@providers/FindGithubProvider';

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IFavoritesRepository>(
  'FavoritesRepository',
  FavoritesRepository
);

container.registerSingleton<IRepositoriesRepository>(
  'RepositoriesRepository',
  RepositoriesRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerInstance<IFindGithubProvider>(
  'FindGithubProvider',
  container.resolve(FindGithubProvider)
);
