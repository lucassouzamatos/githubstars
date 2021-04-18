import { TypeAction } from 'domain/providers/Action';
import { TypePluralState } from 'domain/providers/State';

export type Action = TypeAction<{ item: RepositoryItem }>;

type RepositoryItem = {
  name: string;
  description: string;
  language: string;
  tags: string[];
};

export type RepositoryState = TypePluralState<RepositoryItem>;

const defaultState: RepositoryState = {
  data: [],
};

const Types = {
  ADD: '@Repositories/ADD',
};

function reducer(state = defaultState, action: Action): RepositoryState {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        data: [...state.data, action.payload.item],
      };
    default:
      return state;
  }
}

const Actions = {
  add(item: RepositoryItem) {
    return {
      type: Types.ADD,
      payload: { item },
    };
  },
};

export { reducer, defaultState, Actions };
