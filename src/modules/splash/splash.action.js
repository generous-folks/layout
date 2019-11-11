export const SHOW_SPLASH = 'SHOW_SPLASH';
export const HIDE_SPLASH = 'HIDE_SPLASH';

export const showSplash = () => dispatch => {
  dispatch({ type: SHOW_SPLASH });
  setTimeout(() => {
    dispatch({ type: HIDE_SPLASH });
  }, 750);
};
