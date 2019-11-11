import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const createTheme = theme => {
  return createMuiTheme({
    ...theme,
    typography: { useNextVariants: true },
    palette: {
      type: theme.palette.type,
      secondary: {
        main: '#0a0a0a',
        light: '#0a0a0a',
        dark: '#0a0a0a',
      },
      primary: {
        main: 'rgba(255, 255, 255, 0.87)',
        light: '#FFF',
        dark: '#FFF',
      },
      error: red,
      default: blue,
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: 'rgba(255, 255, 255, 0.54)',
        disabled: 'rgba(255, 255, 255, 0.38)',
        hint: 'rgba(255, 255, 255, 0.38)',
      },
      background: {
        paper: '#0a0a0a',
        default: '#0a0a0a',
      },
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.14)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
      },
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      default: '#fff',
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      // ...theme.palette.text,
    },
    background: {
      paper: '#fafafa',
      default: '#fafafa',
      // ...theme.palette.background,
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      // ...theme.palette.action,
    },

    overrides: {
      MuiPaper: {
        elevation1: {
          // boxShadow: 'none',
          boxShadow: `0px 1px 3px 0px rgba(255, 255, 255, 0.2), 0px 1px 1px 0px rgba(255, 255, 255, 0.14), 0px 2px 1px -1px rgba(255, 255, 255, 0.12)`,
        },
      },
      MuiCardActionArea: {
        root: {
          '&$focusVisible': {
            background: 'transparent',
          },
          '&$focusHighlight': {
            background: 'transparent',
          },
        },

        // focusHighlight: { background: 'transparent' },
        // focusVisible: { background: 'transparent' },
      },
      MuiCardHeader: {
        root: {
          margin: 0,
          background: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : '#0a0a0a', // theme.palette.primary.main,
          color: theme.palette.type === 'light' ? '#0a0a0a' : 'rgba(255, 255, 255, 0.87)',
        },
        title: {
          color: theme.palette.type === 'light' ? '#0a0a0a' : 'rgba(255, 255, 255, 0.87)',
        },
      },
      MuiSvgIcon: {
        colorSecondary: {
          color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        },
      },
      MuiFormLabel: {
        root: {
          color: theme.palette.type === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  });
};

// export const createTheme = theme =>
// createMuiTheme({
// typography: { useNextVariants: true },
// palette: {
//   common: {
//     black: '#000',
//     white: '#fff',
//     type: 'dark',
//     ...theme.palette.common,
//   },
//   primary: {
//     light: '#7986cb',
//     main: '#3f51b5',
//     dark: '#303f9f',
//     contrastText: '#fff',
//     ...theme.palette.primary,
//   },
//   secondary: {
//     light: '#ff4081',
//     main: '#f50057',
//     dark: '#c51162',
//     contrastText: '#fff',
//     ...theme.palette.secondary,
//   },
//   error: {
//     light: '#e57373',
//     main: '#f44336',
//     dark: '#d32f2f',
//     contrastText: '#fff',
//   },
//   grey: {
//     50: '#fafafa',
//     100: '#f5f5f5',
//     200: '#eeeeee',
//     300: '#e0e0e0',
//     400: '#bdbdbd',
//     500: '#9e9e9e',
//     600: '#757575',
//     700: '#616161',
//     800: '#424242',
//     900: '#212121',
//     A100: '#d5d5d5',
//     A200: '#aaaaaa',
//     A400: '#303030',
//     A700: '#616161',
//   },
//   tonalOffset: 0.2,
//   contrastThreshold: 3,
//   text: {
//     primary: 'rgba(0, 0, 0, 0.87)',
//     secondary: 'rgba(255, 255, 255, 0.87)',
//     disabled: 'rgba(0, 0, 0, 0.38)',
//     default: '#fff',
//     hint: 'rgba(0, 0, 0, 0.38)',
//     divider: 'rgba(0, 0, 0, 0.12)',
//     ...theme.palette.text,
//   },
//   background: {
//     paper: '#fafafa',
//     default: '#fafafa',
//     ...theme.palette.background,
//   },
//   action: {
//     active: 'rgba(0, 0, 0, 0.54)',
//     hover: 'rgba(0, 0, 0, 0.08)',
//     hoverOpacity: 0.08,
//     selected: 'rgba(0, 0, 0, 0.14)',
//     disabled: 'rgba(0, 0, 0, 0.26)',
//     disabledBackground: 'rgba(0, 0, 0, 0.12)',
//     ...theme.palette.action,
//   },
// },
// overrides: {
//   MuiCardActionArea: {
//     focusHighlight: { background: 'transparent' },
//     focusVisible: { background: 'transparent' },
//   },
//   MuiCardHeader: {
//     root: {
//       margin: 0,
//       background: theme.palette.primary.main,
//       color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
//     },
//     title: {
//       color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
//     },
//   },
//   MuiSvgIcon: {
//     colorSecondary: {
//       color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
//     },
//   },
//   MuiFormLabel: {
//     root: {
//       color: 'rgba(0,0,0,0.3)',
//     },
//   },
// },
// });
