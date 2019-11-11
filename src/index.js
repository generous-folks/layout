import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import * as serviceWorker from './serviceWorker';
import initializeApp from './utils/init';

import App from './App';

import { configInit } from './modules/app/app.action';
import { showSplash } from './modules/splash/splash.action';
import { getPathname } from './utils/routing.utils';

const init = async () => {
  const config = await initializeApp();
  const store = configureStore();
  const { dispatch, getState } = store;
  const pathname = getPathname(getState());

  if (!pathname.includes('admin')) {
    dispatch(showSplash());
  }

  dispatch(configInit(config));

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App theme={config.modules.theme} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );

  serviceWorker.unregister();
};

init();
