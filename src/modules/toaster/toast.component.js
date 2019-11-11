import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import NewIcon from '@material-ui/icons/FiberNew';

import { makeStyles, useTheme } from '@material-ui/styles';
import classNames from 'classnames';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  new: NewIcon,
};

const useStyles = makeStyles(theme => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: theme.palette.error.dark },
  info: { backgroundColor: theme.palette.primary.dark },
  warning: { backgroundColor: amber[700] },
  new: { backgroundColor: 'white' },
  icon: { fontSize: 20 },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  snackBar: {
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: { width: '100%' },
  },
  snackBarContent: {
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: { maxWidth: '60%' },
  },
  snackContent: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  snackAction: {
    marginLeft: '10px',
    textAlign: 'justify',
  },
  colorDark: {
    color: 'black !important',
  },
}));

const Toaster = props => {
  const classes = useStyles(useTheme());

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.hideToast();
  };

  const { content, variant, visible } = props;

  const Icon = variantIcon[variant];

  const applyDarkColor = (variant, classname) =>
    variant === 'new' ? classNames(classname, classes.colorDark) : classname;
  return (
    <Snackbar
      className={classes.snackBar}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={visible}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classNames(classes[variant], classes.snackBarContent)}
        aria-describedby="client-snackbar"
        message={
          <span className={applyDarkColor(variant, classes.snackContent)} id="client-snackbar">
            <Icon />
            <p className={applyDarkColor(variant, classes.snackAction)}>{content}</p>
          </span>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
            <CloseIcon color={variant === 'new' ? 'secondary' : 'primary'} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

Toaster.defaultProps = {
  content: '',
  options: {},
};

Toaster.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideToast: PropTypes.func.isRequired,
  content: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'new']).isRequired,
  options: PropTypes.shape({}),
};

export default Toaster;
