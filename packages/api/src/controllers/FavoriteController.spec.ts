import request from 'supertest';

import app from '@infra/http/app';

import TestDatabaseUtils from '@tests/utils/database';
import AxiosMock from '@tests/mocks/axios';
import { FakeGithubRepository, FakeGithubUser } from '@tests/factory/faker';

jest.mock('axios');

describe('FavoriteController', () => {
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

    return request(app)
      .get('/api/favorites')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toHaveLength(1);
        expect(response.body.data[0].repository).toEqual(joc);
      });
  });

  it('should throw a error if token is not defined', async () => {
    return request(app)
      .get('/api/favorites')
      .expect(401)
      .then((response) => {
        expect(response.body.message).toEqual('Authorization is missing');
      });
  });

  it('should throw a error if token is wrong', async () => {
    return request(app)
      .get('/api/favorites')
      .set('Authorization', 'token')
      .expect(401)
      .then((response) => {
        expect(response.body.message).toEqual('Authorization is failed');
      });
  });
});
