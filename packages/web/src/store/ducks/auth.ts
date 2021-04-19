import { Action, State, Item } from 'domain/store/auth';

const defaultState: State = {
  data: {},
};

const Types = {
  SYNC: '@Auth/SYNC',
  SET: '@Auth/SET',
  LOADING: '@Auth/LOADING',
  ERROR: '@Auth/ERROR',
};

function reducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case Types.SET:
      return {
        ...state,
        error: undefined,
        loading: false,
        data: action.payload.user as Item,
      };
    case Types.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error as string,
      };
    case Types.LOADING:
      return {
        ...state,
        error: undefined,
        loading: action.payload.loading as boolean,
      };
    default:
      return state;
  }
}

const Actions = {
  sync(username: string) {
    return {
      type: Types.SYNC,
      payload: { username },
    };
  },
  set(user: Item) {
    return {
      type: Types.SET,
      payload: { user },
    };
  },
  loading(loading: boolean) {
    return {
      type: Types.LOADING,
      payload: { loading },
    };
  },
  error(error: string) {
    return {
      type: Types.ERROR,
      payload: { error },
    };
  },
};

export { reducer, defaultState, Actions, Types };
