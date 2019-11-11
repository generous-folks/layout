import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/styles';

import MUITableHead from '@material-ui/core/TableHead';

import { getTemplate } from '../engine/template.engine';

const useStyles = makeStyles(theme => ({
  header: { background: theme.palette.primary[500] },
}));

function TableBody({ components, path }) {
  const classes = useStyles(useTheme);

  return <MUITableHead className={classes.header}>{getTemplate(components, path)}</MUITableHead>;
}

TableBody.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  path: PropTypes.string.isRequired,
};

export default TableBody;
