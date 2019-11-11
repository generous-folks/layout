import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import MUIButton from '@material-ui/core/Button';

// Components
import { Col } from './grid.components';
import Controls from '../modules/admin/cms/forms/controls.component';
import Icon from './icon.template';

const Button = ({ components: text, sizes, variant, color, icon, iconColor, isAdmin, target, path, id }) => {
  return (
    <>
      <Col {...sizes}>
        <MUIButton color={color} variant={variant}>
          {text}
          {icon && <Icon components={icon} color={iconColor} />}
        </MUIButton>
      </Col>
      <Controls child isAdmin={isAdmin} target={target} id={id} path={path} />
    </>
  );
};

Button.defaultProps = {
  variant: 'outlined',
  color: 'primary',
  icon: null,
  iconColor: 'primary',
};

Button.propTypes = {
  iconColor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  isAdmin: PropTypes.bool.isRequired,
  components: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
  target: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;
