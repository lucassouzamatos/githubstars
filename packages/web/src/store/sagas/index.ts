import { Types as AuthTypes } from 'store/ducks/auth';
import { Types as RepositoryTypes } from 'store/ducks/repositories';

import * as AuthEffects from 'store/sagas/auth';
import * as RepositoriesEffects from 'store/sagas/repositories';

export default {
  [AuthTypes.SYNC]: AuthEffects.sync,
  [RepositoryTypes.GET]: RepositoriesEffects.get,
  [RepositoryTypes.INSERT_TAGS]: RepositoriesEffects.insertTags,
  [RepositoryTypes.REMOVE_TAG]: RepositoriesEffects.removeTag,
};
