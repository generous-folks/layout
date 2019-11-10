import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

const defaultSizes = { xs: 12, sm: 12, md: 12, lg: 12 };
const SizesPropTypes = {
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const giveSizesIfItem = ({ item, ...props }) =>
  item ? { ...defaultSizes, ...props } : omit(props, ['xs', 'sm', 'md', 'lg']);
export const Row = ({ justify, ...props }) => (
  <Grid container justify={justify} {...giveSizesIfItem(props)}>
    {props.children}
  </Grid>
);

Row.defaultProps = {
  justify: 'space-around',
};

Row.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};

export const Col = props => (
  <Grid item {...props}>
    {props.children}
  </Grid>
);

Col.defaultProps = {
  ...defaultSizes,
};

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  ...SizesPropTypes,
};
