import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const ServiceIcon = ({ components, color }) => {
  return <Icon color={color}>{components}</Icon>;
};

ServiceIcon.defaultProps = {
  color: 'primary',
};
ServiceIcon.propTypes = {
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  components: PropTypes.string.isRequired,
};

export default React.memo(ServiceIcon);
