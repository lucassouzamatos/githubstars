/* eslint-disable import/no-extraneous-dependencies */
import { localCache } from 'adapters/cache';

import 'jest-localstorage-mock';

describe('CacheAdapter', () => {
  const cachePrefix = 'prefix';
  const cache = localCache(cachePrefix);

  beforeEach(() => {
    cache.clear();
    jest.spyOn(localStorage, 'setItem');
  });

  test('should call localstorage.setItem', () => {
    const value = { test: 1 };
    const key = 'test';
    const keyWithPrefix = `${cachePrefix}@${key}`;

    cache.set(key, value);
    expect(localStorage.setItem).toBeCalledWith(
      keyWithPrefix,
      JSON.stringify(value)
    );
  });

  test('should call localstorage.getItem', () => {
    const key = 'test';
    const keyWithPrefix = `${cachePrefix}@${key}`;

    cache.get(key);
    expect(localStorage.getItem).toBeCalledWith(keyWithPrefix);
  });
});
