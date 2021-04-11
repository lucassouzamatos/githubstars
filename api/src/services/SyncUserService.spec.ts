import faker from 'faker';

import SyncUserService from '@services/SyncUserService';

import IRepositoriesRepository from '@domain/repositories/IRepositoriesRepository';
import IFavoritesRepository from '@domain/repositories/IFavoritesRepository';
import IUsersRepository from '@domain/repositories/IUsersRepository';
import IFindGithubProvider from '@domain/providers/IFindGithubProvider';

import RepositoriesRepositoryMock from '@tests/repositories/RepositoriesRepository.mock';
import FavoritesRepositoryMock from '@tests/repositories/FavoritesRepository.mock';
import UsersRepositoryMock from '@tests/repositories/UsersRepository.mock';
import FindGithubProviderMock from '@tests/providers/FindGithubProvider.mock';

describe('SyncUserService', () => {
  let syncUserService: SyncUserService;
  let usersRepository: IUsersRepository;
  let repositoriesRepository: IRepositoriesRepository;
  let favoritesRepository: IFavoritesRepository;
  let findGithubProvider: IFindGithubProvider;

  beforeEach(() => {
    usersRepository = new UsersRepositoryMock();
    repositoriesRepository = new RepositoriesRepositoryMock();
    favoritesRepository = new FavoritesRepositoryMock();
    findGithubProvider = new FindGithubProviderMock();
    syncUserService = new SyncUserService(
      usersRepository,
      repositoriesRepository,
      favoritesRepository,
      findGithubProvider
    );
  });

  it('should returns created user from repository', async () => {
    const username = faker.internet.userName();
    await syncUserService.execute({ username });

    const created = await usersRepository.findByUsername(username);

    expect(created?.username).toBe(username);
  });

  it('should throw error if username is undefined', async () => {
    await expect(syncUserService.execute({})).rejects.toThrow(
      'The username must be defined'
    );
  });
});
