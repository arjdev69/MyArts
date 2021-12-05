import {combineReducers} from 'redux';

import Auths from './auth/reducer';
import Arts from './Arts/reducer';

export default combineReducers({
  Auth: Auths,
  Arts: Arts,
});
