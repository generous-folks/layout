import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './modules/app/app.reducer';
import admin from './modules/admin/admin.reducer';
import toaster from './modules/toaster/toaster.reducer';
import cms from './modules/admin/cms/cms.reducer';
import pageContent from './modules/pageContentManager/pageContent.reducer';
import lang from './modules/lang/lang.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    admin,
    cms,
    app,
    toaster,
    pageContent,
    lang,
  });
