import { getData } from '../../utils/firebase.utils';

export const GET_PAGE_CONTENT_BEGIN = 'pageContent/GET_PAGE_CONTENT_BEGIN';
export const GET_PAGE_CONTENT_SUCCESS = 'pageContent/GET_PAGE_CONTENT_SUCCESS';
export const GET_PAGE_CONTENT_FAILURE = 'pageContent/GET_PAGE_CONTENT_FAILURE';

export const getPageContent = (ref, lang) => async dispatch => {
  dispatch({ type: GET_PAGE_CONTENT_BEGIN });
  try {
    const pageContent = await getData(`public/content/${lang}/${ref}`);
    dispatch({
      type: GET_PAGE_CONTENT_SUCCESS,
      data: pageContent,
      path: `public/content/${lang}/${ref}`,
      page: ref,
    });
  } catch (e) {
    dispatch({
      type: GET_PAGE_CONTENT_FAILURE,
      data: { error: e },
    });
    throw new Error('Page content fetch failed');
  }
};
