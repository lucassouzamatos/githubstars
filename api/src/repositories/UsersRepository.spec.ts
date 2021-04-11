/* eslint-disable @typescript-eslint/no-empty-function */
import { repositoryMock, insertMock } from '@tests/mocks/typeorm';
import UsersRepository from '@repositories/UsersRepository';
import { FakeUser } from '@tests/factory/faker';
import { InsertResult } from 'typeorm';

describe('UsersRepository', () => {
  let usersRepository: UsersRepository;

  beforeEach(() => {
    usersRepository = new UsersRepository();
  });

  it('should returns an user', async () => {
    const fakeUser = FakeUser({ login: 'test', github_id: 'test' });
    repositoryMock.findOne.mockResolvedValue(fakeUser);

    const user = await usersRepository.findByUsername('test');
    expect(user).toMatchObject(fakeUser);
  });

  it('should creates an user', async () => {
    const fakeUser = FakeUser({ login: 'test', github_id: 'test' });
    insertMock.execute.mockResolvedValue({
      generatedMaps: [fakeUser],
      identifiers: [fakeUser],
      raw: [fakeUser],
    } as InsertResult);

    const user = await usersRepository.create(fakeUser);

    expect(user).toMatchObject(fakeUser);
  });
});
