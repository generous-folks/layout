export const CONFIG_INIT = 'app/CONFIG_INIT';
export const GET_CONFIG_BEGIN = 'app/GET_CONFIG_BEGIN';
export const GET_CONFIG_SUCCESS = 'app/GET_CONFIG_SUCCESS';
export const GET_CONFIG_FAILURE = 'app/GET_CONFIG_FAILURE';

export const TOGGLE_NAVBAR = 'app/TOGGLE_NAVBAR';

export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });

export const configInit = config => dispatch => {
  dispatch({ type: CONFIG_INIT, config });
};
