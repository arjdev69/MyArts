import {all} from 'redux-saga/effects';

import auth from './auth/saga';
import arts from './Arts/saga';

export default function* rootSaga() {
  return yield all([auth, arts]);
}
