import { localCache } from 'adapters/cache';

const token = () => {
  return `Bearer ${localCache().get('auth')?.data?.token}`;
};

const request = {
  get(path: string) {
    return fetch(process.env.REACT_APP_API_URL + path, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        Authorization: token(),
      },
    });
  },
  post(path: string, body: unknown) {
    return fetch(process.env.REACT_APP_API_URL + path, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        Authorization: token(),
      },
      body: JSON.stringify(body),
    });
  },
};

export default request;
