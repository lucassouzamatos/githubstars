import request from 'supertest';
import { verify } from 'jsonwebtoken';

import app from '@infra/http/app';

import TestDatabaseUtils from '@tests/utils/database';
import AxiosMock from '@tests/mocks/axios';
import { FakeGithubRepository, FakeGithubUser } from '@tests/factory/faker';

jest.mock('axios');

describe('UserController', () => {
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

  it('should return a valid token for user', async () => {
    const fakeGithubRepository = FakeGithubRepository();
    const fakeGithubUser = FakeGithubUser();

    AxiosMock.request(fakeGithubUser).request([fakeGithubRepository]);

    return request(app)
      .post('/api/user/sync')
      .send({ username: fakeGithubUser.login })
      .expect(200)
      .then((response) => {
        expect(
          verify(response.body.token, process.env.JWT_TOKEN as string)
        ).toBeTruthy();
      });
  });
});
