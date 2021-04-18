import { Dispatch } from 'react';
import { usePersistedReducer } from 'providers/store/usePersistedReducer';

import {
  reducer as repositoriesReducer,
  defaultState as repositoriesDefaultState,
  RepositoryState as RepositoriesState,
  Action as RepositoriesAction,
} from 'store/repositories';

export type CombinedReducer = {
  repositories: RepositoriesState;
};

export type CombinedAction = RepositoriesAction;

const createCombinedReducers = (): [
  CombinedReducer,
  Dispatch<CombinedAction>
] => {
  const [repositories, dispatch] = usePersistedReducer<
    RepositoriesState,
    RepositoriesAction
  >(repositoriesReducer, repositoriesDefaultState, 'repositories');

  return [
    { repositories } as CombinedReducer,
    dispatch as Dispatch<CombinedAction>,
  ];
};

export default createCombinedReducers;
