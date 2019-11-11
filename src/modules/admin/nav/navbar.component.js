import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles, useTheme } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  drawerPaper: { width: drawerWidth },
  content: {
    flexGrow: 1,
    marginTop: '15%',
    width: '-webkit-fill-available',
    [theme.breakpoints.up('sm')]: { marginTop: '7.5%' },
  },
}));

const NavBar = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { pages, pathname } = props;
  if (!pages) {
    return null;
  }

  const drawer = (
    <div>
      <List>
        <ListItem selected={pathname === `/admin/`} component={Link} to="/admin/" button key="dashboard">
          <ListItemText primary="DASHBOARD" />
        </ListItem>
        {Object.values(pages).map(page => (
          <ListItem component={Link} to={page.path} selected={pathname === page.path} button key={page.name}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.toggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {props.desktopOpen && (
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant={props.desktopOpen ? 'permanent' : 'temporary'}
              open={props.desktopOpen}
            >
              {drawer}
            </Drawer>
          </Hidden>
        )}
      </nav>
      <main className={props.desktopOpen ? classes.content : {}}>{props.children}</main>
    </div>
  );
};

NavBar.defaultProps = { children: null };
NavBar.propTypes = {
  // theme: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  mobileOpen: PropTypes.bool.isRequired,
  desktopOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default NavBar;
