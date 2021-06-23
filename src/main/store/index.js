import { combineReducers } from 'redux';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import { signupStore, SIGNUP_STORE_NAME } from '../../core/signup';
import { usersStore, USERS_STORE_NAME } from '../../core/users';
export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [USERS_STORE_NAME]: usersStore,
});

export { initStore } from './store.core';
