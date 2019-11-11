import { signIn, signOut } from '../../utils/firebase.utils';
import { showToast } from '../toaster/toaster.action';

export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';

export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const login = ({ email, password }) => async dispatch => {
  try {
    const success = await signIn({ email, password });
    dispatch({ type: LOGIN_SUCCESS, success });
    dispatch(showToast('success', 'You successfully logged in'));
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, e });
    dispatch(showToast('error', 'Login Failed'));
  }
};

export const logout = () => async dispatch => {
  try {
    const success = await signOut();
    dispatch({ type: LOGOUT_SUCCESS, success });
    dispatch(showToast('success', 'You successfully logged out'));
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE });
    dispatch(showToast('error', 'Logout Failed'));
  }
};
