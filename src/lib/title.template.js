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

const Title = ({ components, align, gutterBottom, sizes, id, path, target, isAdmin }) => {
  const classes = useStyles();
  return (
    <Col className={isAdmin ? classes.admin : classes.user} {...sizes}>
      <Controls child isAdmin={isAdmin} target={target} id={id} path={path} />
      <Typography style={{ margin: '2.5%' }} gutterBottom={gutterBottom} align={align} component="h3" variant="h5">
        {components}
      </Typography>
    </Col>
  );
};

Title.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  target: PropTypes.string.isRequired,
  gutterBottom: PropTypes.bool,
  align: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
  components: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Title;
