import { TOGGLE_TOAST, HIDE_TOAST, SHOW_TOAST } from './toaster.action';

const initialState = {
  visible: false,
  content: null,
  variant: 'info',
  options: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TOAST:
      return {
        ...state,
        visible: !state.visible,
        content: action.content ? action.content : null,
        variant: action.variant ? action.variant : 'info',
      };

    case SHOW_TOAST:
      return {
        ...state,
        visible: true,
        content: action.content,
        variant: action.variant,
        error: action.error,
        options: action.options,
      };

    case HIDE_TOAST:
      return {
        ...state,
        visible: false,
        content: null,
        options: {},
      };
    default:
      return state;
  }
}
