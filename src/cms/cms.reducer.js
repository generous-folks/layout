import set from 'lodash/set';
import omit from 'lodash/omit';

import {
  STEPPER_NEXT,
  STEPPER_BACK,
  STEPPER_RESET,
  SET_PARENT_ELEMENT,
  SET_CHILD_ELEMENT,
  SET_PREVIEW_ELEMENT,
  SET_PREVIEW_ELEMENT_PROPS,
  DELETE_PARENT_ELEMENT,
} from './cms.action';

const initialState = {
  activeStep: 0,
  submitContentModal: false,
  previewElement: [],
  components: {},
  page: 'menu',
};

export const setComponent = (components, component) => {
  const path = component.path.split('/').join('.components.');

  return set(components, path, component);
};

export const omitComponent = (components, component) => {
  const path = component.path.split('/').join('.components.');

  return omit(components, [path]);
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARENT_ELEMENT:
      return {
        ...state,
        components: { ...state.components, ...setComponent(state.components, action.component) },
      };

    case DELETE_PARENT_ELEMENT:
      return {
        ...state,
        components: omitComponent(state.components, action.component),
      };

    case SET_CHILD_ELEMENT:
      return {
        ...state,
        components: { ...state.components, ...setComponent(state.components, action.component) },
      };

    case SET_PREVIEW_ELEMENT_PROPS:
    case SET_PREVIEW_ELEMENT:
      return {
        ...state,
        previewElement: action.component,
      };

    case STEPPER_NEXT:
      return { ...state, activeStep: state.activeStep + 1 };

    case STEPPER_BACK:
      return { ...state, activeStep: state.activeStep - 1 };

    case STEPPER_RESET:
      return {
        ...state,
        activeStep: 0,
      };

    default:
      return state;
  }
}
