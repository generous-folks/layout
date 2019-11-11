import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

// Components
import { Col } from './grid.components';
import Controls from '../modules/admin/cms/forms/controls.component';
import { ADMIN_BORDERS } from '../styles/borders.styles';

const useStyles = makeStyles({
  user: {},
  admin: ADMIN_BORDERS,
});

const Text = ({ components, align, sizes, gutterBottom, target, id, path, isAdmin }) => {
  const classes = useStyles();

  return (
    <Col className={isAdmin ? classes.admin : classes.user} {...sizes}>
      <Controls child isAdmin={isAdmin} target={target} id={id} path={path} />
      <Typography align={align} gutterBottom={gutterBottom} component="p">
        {components}
      </Typography>
    </Col>
  );
};

Text.propTypes = {
  target: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  components: PropTypes.string.isRequired,
  gutterBottom: PropTypes.bool,
  sizes: PropTypes.shape({}).isRequired,
  align: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Text;
