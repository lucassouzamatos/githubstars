import { TypeAction } from 'domain/providers/Action';
import SagaActions from 'store/sagas';

export function applySaga<A extends TypeAction<unknown>>(
  dispatch: (action) => void
) {
  return (action: A) => {
    if (Object.keys(SagaActions).includes(action.type)) {
      SagaActions[action.type](action, dispatch);
    }

    dispatch(action);
  };
}
