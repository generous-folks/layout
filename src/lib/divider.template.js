import React from 'react';
import PropTypes from 'prop-types';

import { Col } from './grid.components';
import Divider from '@material-ui/core/Divider';

const Hr = ({ sizes, margin }) => <Col component={Divider} style={{ margin: margin, padding: 0 }} {...sizes} />;

Hr.propTypes = {
  sizes: PropTypes.shape({}).isRequired,
  margin: PropTypes.string.isRequired,
};

export default Hr;
