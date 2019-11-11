import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import pageContentMiddleware from './middlewares/pageContent.middleware';

export const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history), pageContentMiddleware)),
  );

  return store;
}
