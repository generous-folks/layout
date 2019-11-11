import React from 'react';
import PropTypes from 'prop-types';

import MUITableBody from '@material-ui/core/TableBody';
import { getTemplate } from '../engine/template.engine';

function TableBody({ components, path }) {
  return <MUITableBody>{getTemplate(components, path)}</MUITableBody>;
}

TableBody.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  path: PropTypes.string.isRequired,
};

export default TableBody;
