import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PowerOff from '@material-ui/icons/SettingsPowerRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, useTheme } from '@material-ui/styles';

import { renderAdminRoutes } from '../../utils/routing.utils';

import Toaster from '../toaster/toast.connector';
import DrawerComponent from './nav/navbar.connector';
import Login from '../auth/login.connector';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    color: 'black',
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.default,
    [theme.breakpoints.up('sm')]: { width: `calc(100% - ${drawerWidth}px)` },
  },
  iconButton: { [theme.breakpoints.up('sm')]: { display: 'none' } },
  pageTitle: { margin: '0 auto' },
}));

const AdminRoutes = props => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  const theme = useTheme();
  const classes = useStyles(theme);

  const { isAdmin, initialized, configInitAdmin, initializeAdmin, config, pathname } = props;

  useEffect(() => {
    if (isAdmin && !config) {
      configInitAdmin();
    }

    if (!initialized && isAdmin && config) {
      initializeAdmin();
    }
  }, [isAdmin, initialized, configInitAdmin, initializeAdmin, config]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const toggleDrawerDesktop = () => setDesktopOpen(desktopOpen);

  return (
    <div className={classes.wrapper}>
      {isAdmin ? (
        config && (
          <div>
            <AppBar className={classes.appBar} color="primary" position="fixed">
              <Toolbar>
                <IconButton
                  className={classes.iconButton}
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Admin
                </Typography>
                <Typography className={classes.pageTitle} variant="h6" color="inherit" noWrap>
                  {pathname.replace('/admin/', '').toUpperCase()}
                </Typography>

                <IconButton to="/" color="secondary" aria-label="Logout" onClick={toggleDrawerDesktop}>
                  <MenuIcon />
                </IconButton>

                <IconButton component={Link} to="/" color="secondary" aria-label="Logout" onClick={props.logout}>
                  <PowerOff />
                </IconButton>
              </Toolbar>
            </AppBar>
            <DrawerComponent
              pages={config.pages}
              desktopOpen={desktopOpen}
              mobileOpen={mobileOpen}
              toggle={handleDrawerToggle}
            >
              <Suspense fallback={<CircularProgress />}>
                <div>{initialized && renderAdminRoutes(config)}</div>
              </Suspense>
            </DrawerComponent>
          </div>
        )
      ) : (
        <Login />
      )}
      <Toaster />
    </div>
  );
};

AdminRoutes.defaultProps = { config: null };

AdminRoutes.propTypes = {
  pathname: PropTypes.string.isRequired,
  configInitAdmin: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  config: PropTypes.shape({ pages: PropTypes.shape({}) }),
  initialized: PropTypes.bool.isRequired,
  initializeAdmin: PropTypes.func.isRequired,
};

export default AdminRoutes;
