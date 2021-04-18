import { Action, State, Item } from 'domain/store/auth';

const defaultState: State = {
  data: {},
};

const Types = {
  SYNC: '@Auth/SYNC',
  SET: '@Auth/SET',
};

function reducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case Types.SET:
      return { ...state, data: action.payload.user as Item };
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
};

export { reducer, defaultState, Actions, Types };
