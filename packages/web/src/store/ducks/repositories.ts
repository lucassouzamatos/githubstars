import { Action, Item, State } from 'domain/store/repositories';

const defaultState: State = {
  data: [],
};

export const Types = {
  ADD: '@Repositories/ADD',
  SET: '@Repositories/SET',
  GET: '@Repositories/GET',
  INSERT_TAGS: '@Repositories/INSERT_TAGS',
  REMOVE_TAG: '@Repositories/REMOVE_TAG',
  UPDATE: '@Repositories/UPDATE',
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
    case Types.UPDATE:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.item?.id ? action.payload.item : item
        ),
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
  get() {
    return {
      type: Types.GET,
      payload: {},
    };
  },
  set(items: Item[]) {
    return {
      type: Types.SET,
      payload: { items },
    };
  },
  update(item: Item) {
    return {
      type: Types.UPDATE,
      payload: { item },
    };
  },
  insertTags(tags: string, repository: Item) {
    return {
      type: Types.INSERT_TAGS,
      payload: { tags, repository },
    };
  },
  removeTag(tag: string, repository: Item) {
    return {
      type: Types.REMOVE_TAG,
      payload: { tag, repository },
    };
  },
};

export { reducer, defaultState, Actions };
