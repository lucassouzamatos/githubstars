import { insertMock } from '@tests/mocks/typeorm';
import TagsRepository from '@repositories/TagsRepository';
import { FakeFavorite } from '@tests/factory/faker';
import { InsertResult } from 'typeorm';

describe('TagsRepository', () => {
  let tagsRepository: TagsRepository;

  beforeEach(() => {
    tagsRepository = new TagsRepository();
  });

  it('should attach a tag in favorite', async () => {
    const fakeFavorite = FakeFavorite();

    const normalizedValues = ['tag'].map((name: string) => ({
      name,
      favorite: fakeFavorite,
    }));

    insertMock.execute.mockImplementationOnce(() =>
      Promise.resolve({
        generatedMaps: normalizedValues,
        identifiers: normalizedValues,
        raw: normalizedValues,
      } as InsertResult)
    );

    const response = await tagsRepository.attach(['tag'], fakeFavorite);
    expect(insertMock.values).toHaveBeenCalledWith(normalizedValues);
    expect(response).toMatchObject(normalizedValues);
  });
});
