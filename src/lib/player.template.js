import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Col } from './grid.components';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
});

const Player = ({ components }) => {
  const classes = useStyles();
  return (
    <Col xs={12} sm={12} md={12} lg={12}>
      <video className={classes.container} controls loop autoPlay muted>
        <source src={components} type="video/mp4" />
      </video>
    </Col>
  );
};

Player.propTypes = {
  components: PropTypes.string.isRequired,
};

export default Player;
