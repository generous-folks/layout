import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Components
import { Col } from './grid.components';

const useStyles = makeStyles({
  col: {
    margin: '0 auto',
  },
});

const Subtitle = ({ components, sizes }) => {
  const classes = useStyles();

  return (
    <Col className={classes.col} {...sizes}>
      <Typography component="h4" variant="h6">
        {components}
      </Typography>
    </Col>
  );
};

Subtitle.propTypes = {
  sizes: PropTypes.shape({}).isRequired,
  components: PropTypes.string.isRequired,
};

export default Subtitle;
