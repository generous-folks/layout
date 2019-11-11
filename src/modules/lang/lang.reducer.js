import { CHANGE_LANG } from './lang.actions';

const initialState = { currentLang: 'fr' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      // Just after a request is sent
      return {
        ...state,
        currentLang: action.lang,
      };

    default:
      return state;
  }
}
