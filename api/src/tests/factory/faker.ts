import faker from 'faker';

import IGithubRepository from '@domain/github/IGithubRepository';
import IGithubUser from '@domain/github/IGithubUser';
import IUser from '@domain/entities/IUser';
import IRepository from '@domain/entities/IRepository';

export const FakeGithubRepository = (): IGithubRepository => ({
  id: faker.datatype.uuid(),
  name: faker.random.word(),
  full_name: faker.random.word(),
  description: faker.random.words(),
  html_url: faker.internet.url(),
  language: faker.random.word(),
});

interface FakeRepositoryParams {
  github_id?: string;
  name?: string;
  description?: string;
  url?: string;
  language?: string;
}

export const FakeRepository = (params?: FakeRepositoryParams): IRepository => ({
  name: params?.name ?? faker.random.word(),
  github_id: params?.github_id ?? faker.datatype.uuid(),
  description: params?.description ?? faker.random.words(),
  url: params?.url ?? faker.internet.url(),
  language: params?.language ?? faker.random.word(),
});

interface FakeGithubUserParams {
  login?: string;
}

export const FakeGithubUser = (params?: FakeGithubUserParams): IGithubUser => ({
  id: faker.datatype.uuid(),
  login: params?.login ?? faker.internet.userName(),
});

interface FakeUserParams {
  login?: string;
  github_id?: string;
}

export const FakeUser = (params?: FakeUserParams): IUser => ({
  username: params?.login ?? faker.internet.userName(),
  github_id: params?.github_id ?? faker.datatype.uuid(),
});
