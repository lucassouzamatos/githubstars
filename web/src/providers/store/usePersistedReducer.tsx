import { localCache } from 'adapters/cache';
import { TypeAction } from 'domain/providers/Action';
import { TypeState } from 'domain/providers/State';
import { useEffect, useReducer } from 'react';

export function usePersistedReducer<
  S extends TypeState,
  A extends TypeAction<unknown>
>(
  reducer: (state: S | undefined, action: A) => S,
  initialState: TypeState,
  key: string
): [S, React.Dispatch<A>] {
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
