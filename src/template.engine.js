import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import CircularProgress from '@material-ui/core/CircularProgress';

// eslint-disable-next-line no-console
console.log('REMOVE SHORTID GENERATE BEFORE MEP');

// const replaceInDev = (prod, dev) => (process.env.NODE_ENV === 'production' ? prod : dev);

export const getComponent = (index, component, path, isAdmin) => {
  const Component = lazy(() => import(`../../templates/lib/${component.target}.template`));

  return <Component key={`${component.id || shortid.generate()}`} path={path} isAdmin={isAdmin} {...component} />;
};

export const getTemplate = (components, path, isAdmin) => {
  return components
    ? Object.values(components).map((component, index) => getComponent(index, component, path, isAdmin))
    : null;
};
//replaceInDev(path, shortid.generate())
export default function Page({ content }) {
  return <Suspense fallback={<CircularProgress />}>{getTemplate(content)}</Suspense>;
}

Page.defaultProps = {
  content: null,
};

Page.propTypes = {
  content: PropTypes.shape({}),
};
