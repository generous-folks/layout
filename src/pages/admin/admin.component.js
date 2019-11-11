import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import AsyncAdmin from '../../modules/admin/admin.connector';

const muiTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    type: 'light',
    primary: indigo,
    secondary: red,
    error: red,
    default: blue,
  },
});

const AdminPage = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <AsyncAdmin />
    </ThemeProvider>
  );
};

export default AdminPage;
