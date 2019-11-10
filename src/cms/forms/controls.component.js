import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Mui
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// Icons
import Edit from '@material-ui/icons/Edit';
import Clear from '@material-ui/icons/Clear';
import Add from '@material-ui/icons/Add';

import { Col, Row } from '../../../../components/grid.components';
import { makeStyles, Dialog } from '@material-ui/core';
import Stepper from './stepper.connector';
import DeleteModal from './delete.modal';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '200px',
  },
  typography: {
    width: '100%',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const Controls = ({ target, isAdmin, child, ...props }) => {
  const classes = useStyles(props);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const toggleDeleteDialog = e => {
    e.preventDefault();
    return setIsDeleteOpen(!isDeleteOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDialog = e => {
    e.preventDefault();
    return setIsOpen(!isOpen);
  };

  return !isAdmin || window.location.pathname !== '/admin/pages' ? null : (
    <Row className={classes.container} id={target} alignContent="flex-end" justify="flex-end">
      <Paper
        className={classes.container}
        component={Row}
        wrap="nowrap"
        direction="row"
        alignContent="center"
        justify="space-around"
      >
        <Typography className={classes.typography} align="center" justify="center">
          {target}
        </Typography>
        {!child && (
          <Col sm={6} md={6} xs={6} lg={6}>
            <IconButton onClick={toggleDialog} aria-label="Add">
              <Add color="primary" fontSize="small" />
            </IconButton>
          </Col>
        )}
        {child && (
          <IconButton onClick={toggleDialog} aria-label="Edit">
            <Edit color="inherit" fontSize="small" />
          </IconButton>
        )}
        <IconButton onClick={toggleDeleteDialog} aria-label="Delete">
          <Clear color="error" fontSize="small" />
        </IconButton>
      </Paper>
      <Dialog fullWidth onClose={toggleDialog} maxWidth="lg" open={isOpen}>
        <Stepper />
      </Dialog>
      <Dialog fullWidth onClose={toggleDeleteDialog} maxWidth="lg" open={isDeleteOpen}>
        <DeleteModal close={() => setIsDeleteOpen(!isDeleteOpen)} element={target} {...props} />
      </Dialog>
    </Row>
  );
};

Controls.defaultProps = {
  child: false,
};

Controls.propTypes = {
  child: PropTypes.bool,
  isAdmin: PropTypes.bool.isRequired,
  target: PropTypes.string.isRequired,
};

export default Controls;
