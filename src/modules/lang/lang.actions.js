export const CHANGE_LANG = 'lang/CHANGE_LANG';

export const changeLang = lang => ({
  type: CHANGE_LANG,
  lang,
});

export const switchContent = lang => dispatch => {
  dispatch(changeLang(lang));
};
