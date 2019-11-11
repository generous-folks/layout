import React from 'react';
import PropTypes from 'prop-types';
import { Col } from './grid.components';

import LazyImage from '../components/lazyImg.component';

const Image = ({ components, sizes, alt }) => {
  return (
    <Col {...sizes}>
      <LazyImage data={components} alt={alt} />
    </Col>
  );
};

Image.propTypes = {
  components: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
};

export default Image;
