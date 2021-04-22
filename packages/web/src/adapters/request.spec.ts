import request from 'adapters/request';
import { localCache } from 'adapters/cache';

describe('RequestAdapter', () => {
  const globalRef = global;
  const auth = { data: { token: 'token' } };

  beforeEach(() => {
    process.env.REACT_APP_API_URL = 'http://test';

    const cache = localCache();
    cache.set('auth', auth);

    const mockSuccessResponse = { generical: 'test' };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  test('should call get fetch with headers provided by cache', () => {
    const path = '/users';
    const apiUrl = process.env.REACT_APP_API_URL;

    request.get(path);

    expect(globalRef.fetch).toBeCalledWith(apiUrl + path, {
      headers: {
        Authorization: `Bearer ${auth.data.token}`,
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
    });
  });
});
