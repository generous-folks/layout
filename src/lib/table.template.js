import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/styles';

import MUITable from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { getTemplate } from '../engine/template.engine';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '95%',
    margin: theme.spacing(3),
    overflowX: 'auto',
  },
}));

function Table({ components, path }) {
  const classes = useStyles(useTheme);

  return (
    <Paper className={classes.root}>
      <MUITable className={classes.table}>{getTemplate(components, path)}</MUITable>
    </Paper>
  );
}

Table.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  path: PropTypes.string.isRequired,
};

export default Table;
