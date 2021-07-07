import { insertMock } from '@tests/mocks/typeorm';

import RepositoriesRepository from '@repositories/RepositoriesRepository';
import { FakeRepository } from '@tests/factory/faker';
import { InsertResult } from 'typeorm';

describe('RepositoriesRepository', () => {
  let repositoriesRepository: RepositoriesRepository;

  beforeEach(() => {
    repositoriesRepository = new RepositoriesRepository();
  });

  it('should create many repositories', async () => {
    const fakeRepository = FakeRepository();
    insertMock.execute.mockImplementation(() => {
      return Promise.resolve({
        generatedMaps: [fakeRepository],
        identifiers: [fakeRepository],
        raw: [fakeRepository],
      } as InsertResult);
    });

    const repositories = await repositoriesRepository.createMany([
      fakeRepository,
    ]);
    expect(repositories[0]).toMatchObject(fakeRepository);
  });
});
