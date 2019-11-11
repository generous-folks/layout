import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { renderClientsRoutes } from '../../utils/routing.utils';

const UserRoutes = ({ initialized, modules, pages }) => (
  <Suspense fallback={<div />}>{initialized && renderClientsRoutes({ pages, modules })}</Suspense>
);

UserRoutes.propTypes = {
  initialized: PropTypes.bool.isRequired,
  modules: PropTypes.shape({}).isRequired,
  pages: PropTypes.shape({}).isRequired,
};

export default UserRoutes;
