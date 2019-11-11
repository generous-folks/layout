import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import { getTemplate } from '../engine/template.engine';

function Tr({ components, path }) {
  return <TableRow>{getTemplate(components, path)}</TableRow>;
}

Tr.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  path: PropTypes.string.isRequired,
};

export default Tr;
