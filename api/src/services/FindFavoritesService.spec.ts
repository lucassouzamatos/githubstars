import FindFavoritesService from '@services/FindFavoritesService';
import FavoritesRepositoryMock from '@tests/repositories/FavoritesRepository.mock';

import { FakeUser, FakeRepository } from '@tests/factory/faker';

describe('FindFavoritesService', () => {
  let findFavoritesService: FindFavoritesService;
  let favoritesRepository: FavoritesRepositoryMock;

  beforeEach(() => {
    favoritesRepository = new FavoritesRepositoryMock();
    findFavoritesService = new FindFavoritesService(favoritesRepository);
  });

  it('should return paginated result', async () => {
    const fakeUser = FakeUser();
    const fakeRepository = FakeRepository();

    const favorite = await favoritesRepository.link(fakeUser, [fakeRepository]);
    const response = await findFavoritesService.execute({
      userid: favorite[0].user.id,
    });

    expect(response.data).toHaveLength(1);
  });

  it('should throw error if user id is not defined', async () => {
    await expect(findFavoritesService.execute({})).rejects.toThrow(
      'The user id must be defined'
    );
  });
});
