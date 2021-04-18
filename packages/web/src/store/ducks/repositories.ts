import { Action, Item, State } from 'domain/store/repositories';

const defaultState: State = {
  data: [],
};

const Types = {
  ADD: '@Repositories/ADD',
  SET: '@Repositories/SET',
};

function reducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        data: [...state.data, action.payload.item],
      };
    case Types.SET:
      return {
        ...state,
        data: action.payload.items ?? state.data,
      };
    default:
      return state;
  }
}

const Actions = {
  add(item: Item) {
    return {
      type: Types.ADD,
      payload: { item },
    };
  },
  set(items: Item[]) {
    return {
      type: Types.SET,
      payload: { items },
    };
  },
};

export { reducer, defaultState, Actions };
