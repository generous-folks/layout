export const TOGGLE_TOAST = 'toaster/TOGGLE_TOAST';
export const SHOW_TOAST = 'toaster/SHOW_TOAST';
export const HIDE_TOAST = 'toaster/HIDE_TOAST';

export const toggleToast = (variant, content, error, options) => ({
  type: TOGGLE_TOAST,
  variant,
  content,
  error,
  options,
});

export const showToast = (variant, content, options) => ({
  type: SHOW_TOAST,
  variant,
  content,
  options,
});
export const hideToast = () => (dispatch, getState) => {
  const {
    toaster: { visible },
  } = getState();
  if (!visible) {
    return;
  }
  dispatch({ type: HIDE_TOAST });
};
