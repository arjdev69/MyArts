import {combineReducers} from 'redux';

import Auths from './auth/reducer';
import Arts from './Arts/reducer';
import Cart from './Cart/reducer';

export default combineReducers({
  Auth: Auths,
  Arts: Arts,
  CartShop: Cart,
});
