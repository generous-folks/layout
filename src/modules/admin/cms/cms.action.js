import { callApi } from '../../../utils/firebase.utils';
import { createTemplateElement, addElementProps } from '../../../engine/template.factory';
import { showToast } from '../../toaster/toaster.action';

export const SET_PARENT_ELEMENT = 'cms/SET_PARENT_ELEMENT';
export const DELETE_PARENT_ELEMENT = 'cms/DELETE_PARENT_ELEMENT';
export const SET_CHILD_ELEMENT = 'cms/SET_CHILD_ELEMENT';
export const SET_PREVIEW_ELEMENT = 'cms/SET_PREVIEW_ELEMENT';
export const SET_PREVIEW_ELEMENT_PROPS = 'cms/SET_PREVIEW_ELEMENT_PROPS';

// stepper
export const STEPPER_NEXT = 'cms/STEPPER_NEXT';
export const STEPPER_BACK = 'cms/STEPPER_BACK';
export const STEPPER_RESET = 'cms/STEPPER_RESET';

export const stepperNext = () => ({ type: STEPPER_NEXT });
export const stepperBack = () => ({ type: STEPPER_BACK });
export const stepperReset = () => ({ type: STEPPER_RESET });

export const setParentElement = ({ element, id, path }) => dispatch => {
  dispatch({
    type: SET_PARENT_ELEMENT,
    component: createTemplateElement({ id, path })[element],
  });
};

export const deleteParentElement = ({ element, id, path }) => dispatch => {
  dispatch({
    type: DELETE_PARENT_ELEMENT,
    component: { id, path, element },
  });
};

export const setChildElement = (element, id, path) => dispatch => {
  dispatch({
    type: SET_CHILD_ELEMENT,
    component: createTemplateElement(id, path)[element],
  });
};

export const setPreviewElement = ({ element, id, path }) => dispatch => {
  dispatch({
    type: SET_PREVIEW_ELEMENT,
    component: createTemplateElement({ id, path })[element],
  });
};

const getPreviewElement = ({ cms: { previewElement } }) => previewElement;
export const setPreviewElementProps = props => (dispatch, getState) => {
  const element = getPreviewElement(getState());

  if (!element) {
    return dispatch(showToast('error', 'Aucun élément de base enregistré'));
  }

  dispatch({
    type: SET_PREVIEW_ELEMENT_PROPS,
    component: addElementProps(element, props),
  });

  dispatch(showToast('success', "Propriétés assignées à l'élement..."));
};

export const setPage = () => (dispatch, getState) => {
  const {
    cms: { components },
  } = getState();
  const page = {
    name: 'Page Numéro Une',
    target: 'page-1',
    enabled: true,
    path: '/page-1',
  };
  callApi('addTemplate', { page, template: components })
    .then(() => dispatch(showToast('success', 'Page ajoutée avec succès !')))
    .catch(err => dispatch(showToast('error', "Échec, la page n'a pas été ajoutée !", err)));
};
