import AttachTagService from '@services/AttachTagService';
import FavoritesRepositoryMock from '@tests/repositories/FavoritesRepository.mock';
import TagsRepositoryMock from '@tests/repositories/TagsRepository.mock';

import { FakeUser, FakeRepository } from '@tests/factory/faker';

describe('AttachTagService', () => {
  let attachTagService: AttachTagService;
  let favoritesRepository: FavoritesRepositoryMock;
  let tagsRepository: TagsRepositoryMock;

  beforeEach(() => {
    favoritesRepository = new FavoritesRepositoryMock();
    tagsRepository = new TagsRepositoryMock();

    jest.spyOn(tagsRepository, 'attach');

    attachTagService = new AttachTagService(
      favoritesRepository,
      tagsRepository
    );
  });

  it('should split tags and attach in favorite', async () => {
    const user = FakeUser();
    const repository = FakeRepository();

    const favorites = await favoritesRepository.link(user, [repository]);
    await attachTagService.execute({
      favorite_id: favorites[0].id,
      tags: 'test1, test2',
    });

    expect(tagsRepository.attach).toBeCalledWith(
      ['test1', 'test2'],
      favorites[0]
    );
  });

  it('should throw error if favorite not exists', async () => {
    await expect(
      attachTagService.execute({
        favorite_id: 'favorite-fake',
        tags: 'test1, test2',
      })
    ).rejects.toThrow('The favorite specified not exists');
  });
});
