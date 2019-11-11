import { CONFIG_INIT } from '../modules/app/app.action';
import { showToast } from '../modules/toaster/toaster.action';

export default store => next => action => {
  next(action);

  switch (action.type) {
    case CONFIG_INIT: {
      const {
        modules: {
          ad: { message, enabled },
        },
      } = action.config;
      if (enabled) {
        store.dispatch(showToast('new', message));
      }
      break;
    }

    default:
  }
};
