import { insertMock, repositoryMock } from '@tests/mocks/typeorm';
import IRepository from '@domain/entities/IRepository';
import FavoritesRepository from '@repositories/FavoritesRepository';
import { InsertResult } from 'typeorm';
import { FakeRepository, FakeUser, FakeFavorite } from '@tests/factory/faker';

describe('RepositoriesRepository', () => {
  let favoritesRepository: FavoritesRepository;

  beforeEach(() => {
    favoritesRepository = new FavoritesRepository();
  });

  it('should link many repositories in user', async () => {
    const fakeRepository = FakeRepository();
    const fakeUser = FakeUser();

    const normalizedValues = [fakeRepository].map(
      (repository: IRepository) => ({
        user: fakeUser,
        repository,
      })
    );

    insertMock.execute.mockImplementation(() =>
      Promise.resolve({
        generatedMaps: normalizedValues,
        identifiers: normalizedValues,
        raw: normalizedValues,
      } as InsertResult)
    );

    const favorites = await favoritesRepository.link(fakeUser, [
      fakeRepository,
    ]);

    expect(insertMock.values).toHaveBeenCalledWith(normalizedValues);
    expect(favorites[0].repository).toMatchObject(fakeRepository);
  });

  it('should get paginated result', async () => {
    const fakeRepository = FakeRepository();
    const fakeUser = FakeUser();

    const favorites = [fakeRepository].map((repository: IRepository) => ({
      user: fakeUser,
      repository,
    }));

    repositoryMock.find.mockResolvedValue(favorites);

    const where = {
      user: fakeUser,
    };
    const params = {
      skip: 10,
      take: 5,
    };

    const response = await favoritesRepository.getPaginated(where, params);
    expect(repositoryMock.find).toHaveBeenCalledWith(
      jasmine.objectContaining({ where, ...params })
    );
    expect(response.data[0].repository).toMatchObject(fakeRepository);
    expect(response.data[0].user).toMatchObject(fakeUser);
  });

  it('should get paginated result without pagination params', async () => {
    const fakeRepository = FakeRepository();
    const fakeUser = FakeUser();

    const favorites = [fakeRepository].map((repository: IRepository) => ({
      user: fakeUser,
      repository,
    }));

    repositoryMock.find.mockResolvedValue(favorites);

    const where = {
      user: fakeUser,
    };

    await favoritesRepository.getPaginated(where);
    expect(repositoryMock.find).toHaveBeenCalledWith(
      jasmine.objectContaining({ where, skip: 0, take: 10 })
    );
  });

  it('should returns an favorite', async () => {
    const fakeFavorite = FakeFavorite();
    repositoryMock.findOne.mockResolvedValue(fakeFavorite);

    const favorite = await favoritesRepository.findById('uuidtest', 'uuiduser');
    expect(favorite).toMatchObject(fakeFavorite);
  });
});
