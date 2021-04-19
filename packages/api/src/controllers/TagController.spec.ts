import request from 'supertest';
import faker from 'faker';

import app from '@infra/http/app';

import TestDatabaseUtils from '@tests/utils/database';
import AxiosMock from '@tests/mocks/axios';
import { FakeGithubRepository, FakeGithubUser } from '@tests/factory/faker';

jest.mock('axios');

describe('TagController', () => {
  beforeAll(async () => {
    await TestDatabaseUtils.createConnection();
    await TestDatabaseUtils.cleanAll();
  });

  afterEach(async () => {
    await TestDatabaseUtils.cleanAll();
  });

  afterAll(async () => {
    await TestDatabaseUtils.closeConnection();
  });

  it('should throw error if favorite specified does not exists', async () => {
    const fakeGithubRepository = FakeGithubRepository();
    const fakeGithubUser = FakeGithubUser();

    AxiosMock.request(fakeGithubUser).request([fakeGithubRepository]);

    const sync = await request(app)
      .post('/api/user/sync')
      .send({ username: fakeGithubUser.login });

    const { token } = sync.body;

    return request(app)
      .post('/api/tags/attach')
      .set('Authorization', `Bearer ${token}`)
      .send({
        favorite_id: faker.datatype.uuid(),
        tags: 'tag1, tag2',
      })
      .expect(404)
      .then((response) => {
        expect(response.body.message).toEqual(
          'The favorite specified not exists'
        );
      });
  });

  it('should return favorites after syncronize user', async () => {
    const fakeGithubRepository = FakeGithubRepository();
    const fakeGithubUser = FakeGithubUser();

    AxiosMock.request(fakeGithubUser).request([fakeGithubRepository]);

    const sync = await request(app)
      .post('/api/user/sync')
      .send({ username: fakeGithubUser.login });

    const { token } = sync.body;

    const joc = jasmine.objectContaining({
      github_id: fakeGithubRepository.id,
      name: fakeGithubRepository.full_name,
      description: fakeGithubRepository.description,
      url: fakeGithubRepository.html_url,
      language: fakeGithubRepository.language,
    });

    const favorites = await request(app)
      .get('/api/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send();

    return request(app)
      .post('/api/tags/attach')
      .set('Authorization', `Bearer ${token}`)
      .send({
        favorite_id: favorites.body.data[0].id,
        tags: 'tag1, tag2',
      })
      .expect(200)
      .then((response) => {
        expect(response.body).toBeTruthy();
        expect(response.body.favorite.tags).toHaveLength(2);
        expect(response.body.favorite.repository).toEqual(joc);
      });
  });

  it('should throw a error if body is incorrect', async () => {
    const fakeGithubRepository = FakeGithubRepository();
    const fakeGithubUser = FakeGithubUser();

    AxiosMock.request(fakeGithubUser).request([fakeGithubRepository]);

    const sync = await request(app)
      .post('/api/user/sync')
      .send({ username: fakeGithubUser.login });

    const { token } = sync.body;

    return request(app)
      .post('/api/tags/attach')
      .set('Authorization', `Bearer ${token}`)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual('Bad Request');
        expect(response.body.message).toEqual('request validation failed');
      });
  });

  it('should throw a error if token is not defined', async () => {
    return request(app)
      .post('/api/tags/attach')
      .expect(401)
      .then((response) => {
        expect(response.body.message).toEqual('Authorization is missing');
      });
  });
});
