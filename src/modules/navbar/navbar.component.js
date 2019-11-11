import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles, useTheme } from '@material-ui/styles';

import logo from '../../logo.svg';
import NavIcon from './navicon.component';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.navbar.desktop ? drawerWidth : 0,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: theme.navbar.desktop ? `calc(100% - ${drawerWidth}px)` : '100%',
      display: theme.navbar.desktop ? 'none' : 'initial',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: { display: theme.navbar.desktop ? 'none' : 'initial' },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: theme.isBlack ? theme.palette.secondary.main : theme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight + 20,

    [theme.breakpoints.up('sm')]: { marginTop: theme.navbar.desktop ? 0 : theme.mixins.toolbar.minHeight - 20 },
  },
  divider: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const NavBar = props => {
  const { pages, name, modules } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  const drawer = (
    <div>
      <List color="secondary">
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt={name} src={logo} />
          </ListItemAvatar>
        </ListItem>
        {Object.values(pages).map(
          page =>
            modules[page.target].enabled && (
              <ListItem component={Link} to={page.path} button key={page.name}>
                <ListItemIcon color="#fff">
                  <NavIcon dark={theme.isBlack} name={page.target} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={page.name.toUpperCase()} />
              </ListItem>
            ),
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color={theme.isBlack ? 'secondary' : 'primary'} className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" onClick={props.toggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <h2>{name}</h2>
        </Toolbar>
      </AppBar>
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
        {theme.navbar.desktop && (
          <Hidden xsDown implementation="css">
            <Drawer
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={props.mobileOpen}
              onClose={props.toggle}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              variant={modules.navbar.desktop ? 'permanent' : 'temporary'}
            >
              {drawer}
            </Drawer>
          </Hidden>
        )}
      </nav>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};
NavBar.defaultProps = { name: '' };
NavBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  modules: PropTypes.shape({
    navbar: PropTypes.shape({
      desktop: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  general: PropTypes.shape({}).isRequired,
};

export default NavBar;
