import { getData } from '../../utils/firebase.utils';

export const CONFIG_INIT_ADMIN = 'admin/CONFIG_INIT_ADMIN';
export const CONFIG_INIT_ADMIN_SUCCESS = 'admin/CONFIG_INIT_ADMIN_SUCCESS';
export const CONFIG_INIT_ADMIN_FAILURE = 'admin/CONFIG_INIT_ADMIN_FAILURE';

export const INITIALIZE_ADMIN = 'amin/INITIALIZE_ADMIN';

export const configInitAdmin = () => async dispatch => {
  dispatch({ type: CONFIG_INIT_ADMIN });
  try {
    const config = await getData('private/config');
    dispatch({
      type: CONFIG_INIT_ADMIN_SUCCESS,
      config,
    });
  } catch (err) {
    dispatch({ type: CONFIG_INIT_ADMIN_FAILURE, ...err });
  }
};

export const initializeAdmin = () => ({ type: INITIALIZE_ADMIN });
