import { localCache } from 'adapters/cache';

const request = {
  post(path: string, body: unknown) {
    return fetch(process.env.REACT_APP_API_URL + path, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        Authorization: localCache().get('auth')?.data?.token,
      },
      body: JSON.stringify(body),
    });
  },
};

export default request;
