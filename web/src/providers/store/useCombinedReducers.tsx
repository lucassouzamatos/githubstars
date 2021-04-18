import { Dispatch } from 'react';
import { usePersistedReducer } from 'providers/store/usePersistedReducer';

import {
  State as RepositoriesState,
  Action as RepositoriesAction,
} from 'domain/store/repositories';

import { State as AuthState, Action as AuthAction } from 'domain/store/auth';

import {
  reducer as repositoriesReducer,
  defaultState as repositoriesDefaultState,
} from 'store/ducks/repositories';

import {
  reducer as authReducer,
  defaultState as authDefaultState,
} from 'store/ducks/auth';
import { applySaga } from './applySaga';

export type CombinedReducer = {
  repositories: RepositoriesState;
  auth: AuthState;
};

export type CombinedAction = RepositoriesAction | AuthAction;

const createCombinedReducers = (): [
  CombinedReducer,
  Dispatch<CombinedAction>
] => {
  const [repositories, repositoriesDispatch] = usePersistedReducer<
    RepositoriesState,
    RepositoriesAction
  >(repositoriesReducer, repositoriesDefaultState, 'repositories');

  const [auth, authDispatch] = usePersistedReducer<AuthState, AuthAction>(
    authReducer,
    authDefaultState,
    'auth'
  );

  const dispatch = (action: CombinedAction) => {
    repositoriesDispatch(action as RepositoriesAction);
    authDispatch(action as AuthAction);
  };

  return [
    { repositories, auth } as CombinedReducer,
    applySaga<CombinedAction>(dispatch) as Dispatch<CombinedAction>,
  ];
};

export default createCombinedReducers;
