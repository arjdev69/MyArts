import {combineReducers} from 'redux';

import Auths from './auth/reducer';

export default combineReducers({
  Auth: Auths,
});
