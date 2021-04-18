import { Types as AuthTypes } from 'store/ducks/auth';

import * as AuthEffects from 'store/sagas/auth';

export default {
  [AuthTypes.SYNC]: AuthEffects.sync,
};
