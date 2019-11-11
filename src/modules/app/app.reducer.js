import { TOGGLE_NAVBAR, CONFIG_INIT } from './app.action';
import { HIDE_SPLASH, SHOW_SPLASH } from '../splash/splash.action';

const initialState = {
  config: {
    pages: {},
    modules: {},
    style: {},
  },
  splash: false,
  splashed: false,
  mobileOpen: false,
  initialized: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT:
      return {
        ...state,
        config: action.config,
        initialized: true,
      };

    case TOGGLE_NAVBAR:
      return {
        ...state,
        mobileOpen: !state.mobileOpen,
      };

    case HIDE_SPLASH:
      return {
        ...state,
        splash: false,
      };

    case SHOW_SPLASH:
      return {
        ...state,
        splash: true,
        splashed: true,
      };

    default:
      return state;
  }
}
