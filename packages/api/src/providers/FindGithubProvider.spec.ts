import faker from 'faker';

import FindGithubProvider from '@providers/FindGithubProvider';
import IGithubUser from '@domain/github/IGithubUser';

import AxiosMock from '@tests/mocks/axios';
import {
  FakeGithubRepository,
  FakeRepository,
  FakeGithubUser,
  FakeUser,
} from '@tests/factory/faker';

jest.mock('axios');

describe('FindGithubProvider', () => {
  let findGithubProvider: FindGithubProvider;

  beforeEach(() => {
    findGithubProvider = new FindGithubProvider();
    AxiosMock.clearMock();
  });

  it('should call api to get starred', async () => {
    const fakeGithubRepository = FakeGithubRepository();
    const fakeRepository = FakeRepository({
      github_id: fakeGithubRepository.id,
      name: fakeGithubRepository.full_name,
      description: fakeGithubRepository.description,
      url: fakeGithubRepository.html_url,
      language: fakeGithubRepository.language,
    });

    const mockedResponse = [fakeGithubRepository];

    AxiosMock.request(mockedResponse);

    const starred = await findGithubProvider.starsFromUsername(
      faker.internet.userName()
    );

    expect(starred.data.length).toEqual(1);
    expect(starred.data[0]).toEqual(
      jasmine.objectContaining({
        github_id: fakeRepository.github_id,
        name: fakeRepository.name,
        description: fakeRepository.description,
        url: fakeRepository.url,
        language: fakeRepository.language,
      })
    );
  });

  it('should call api to get user details', async () => {
    const login = faker.internet.userName();
    const fakeGithubUser = FakeGithubUser({ login });
    const fakeUser = FakeUser({ login, github_id: fakeGithubUser.id });

    AxiosMock.request<IGithubUser>(fakeGithubUser);

    const details = await findGithubProvider.detailsFromUsername(login);

    expect(details.data).toEqual(
      jasmine.objectContaining({
        username: fakeUser.username,
        github_id: fakeUser.github_id,
      })
    );
  });
});
