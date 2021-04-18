export function localCache(prefix: string) {
  const localCacheKey = (key: string) => `${prefix}@${key}`;

  return {
    get(key: string) {
      const result = localStorage.getItem(localCacheKey(key));
      if (result) {
        return JSON.parse(result);
      }

      return result;
    },
    set(key: string, value: unknown) {
      localStorage.setItem(localCacheKey(key), JSON.stringify(value));
    },
  };
}
