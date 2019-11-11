import { CONFIG_INIT_ADMIN_SUCCESS, INITIALIZE_ADMIN } from './admin.action';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../auth/auth.action';

const initialState = { config: null, initialized: false, isAdmin: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT_ADMIN_SUCCESS:
      return {
        ...state,
        config: action.config,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAdmin: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAdmin: false,
        config: null,
        initialized: false,
      };

    case INITIALIZE_ADMIN:
      return { ...state, initialized: true };

    default:
      return state;
  }
}
