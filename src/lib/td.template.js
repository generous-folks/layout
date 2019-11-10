import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  cell: { color: '#FFFFFF' },
  rootCell: {
    textAlign: 'center',
  },
});

function Td({ components }) {
  const classes = useStyles();

  return (
    <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
      {components}
    </TableCell>
  );
}

Td.propTypes = {
  components: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Td;
