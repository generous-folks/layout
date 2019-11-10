import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Row, Col } from '../../../../components/grid.components';
import { deleteParentElement } from '../cms.action';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const DeleteModal = ({ close, deleteItem, ...props }) => {
  const classes = useStyles(useTheme());

  const onDelete = () => {
    deleteItem(props);
    close();
  };

  return (
    <Row justify="center" spacing={8} className={classes.paper}>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Typography component="h4" variant="h6" align="center">
          Are you sure you want to delete &quot;{props.element}&quot; ?
        </Typography>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button color="primary" variant="contained" onClick={onDelete}>
          Yes
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button color="secondary" variant="contained" onClick={close}>
          No
        </Button>
      </Col>
    </Row>
  );
};

DeleteModal.propTypes = {
  close: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  element: PropTypes.string.isRequired,
};

export default connect(
  null,
  { deleteItem: deleteParentElement },
)(DeleteModal);
