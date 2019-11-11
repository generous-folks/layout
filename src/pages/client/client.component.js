import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { getTemplate } from '../../engine/template.engine';

export default function Layout({ content }) {
  return <Suspense fallback={<CircularProgress />}>{getTemplate(content)}</Suspense>;
}

Layout.defaultProps = {
  content: null,
};

Layout.propTypes = {
  content: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
};
