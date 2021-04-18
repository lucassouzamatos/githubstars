import { localCache } from 'adapters/cache';
import { TypeAction } from 'domain/providers/Action';
import { TypePluralState } from 'domain/providers/State';
import { useEffect, useReducer } from 'react';

export function usePersistedReducer<
  S extends TypePluralState<unknown>,
  A extends TypeAction<unknown>
>(
  reducer: (state: S | undefined, action: A) => S,
  initialState: TypePluralState<unknown>,
  key: string
) {
  const storage = localCache('persisted@githubstars');

  const [state, dispatch] = useReducer(
    reducer,
    storage.get(key) ?? initialState
  );

  useEffect(() => {
    storage.set(key, state);
  }, [state]);

  return [state, dispatch];
}
