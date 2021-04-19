import { Actions as AuthActions } from 'store/ducks/auth';
import request from 'adapters/request';

export async function sync(payload, dispatch) {
  try {
    dispatch(AuthActions.loading(true));

    const response = await request.post('/user/sync', {
      username: payload.username,
    });

    const json = await response.json();

    if (response.status === 200) {
      dispatch(AuthActions.set({ token: json.token }));
    } else {
      dispatch(AuthActions.error(json.message));
    }
  } catch (e) {
    dispatch(AuthActions.error('An error ocurred, try again.'));
  }
}
