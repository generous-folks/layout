import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import omit from 'lodash/omit';
import classnames from 'classnames';

import { isAuth } from '../modules/auth/auth.selectors';
import { getTemplate } from '../engine/template.engine';

import { Row } from './grid.components';
import Controls from '../modules/admin/cms/forms/controls.component';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  default: {},
  admin: {
    padding: 0,
    border: '1px solid red',
    width: '100%',
    margin: 0,
  },
});

const Section = ({ spacing, justify, components, isAdmin, path, id, target, ...props }) => {
  const classes = useStyles();

  return (
    <Row
      className={classnames(isAdmin ? classes.admin : classes.default)}
      {...omit(props, ['isAdmin', 'dispatch', 'sizes'])}
      spacing={spacing}
      justify={justify}
    >
      <Controls isAdmin={isAdmin} target={target} id={id} path={path} />
      {components && getTemplate(components, path, isAdmin)}
    </Row>
  );
};

Section.defaultProps = {
  spacing: 4,
  justify: 'center',
};

Section.propTypes = {
  target: PropTypes.string.isRequired,
  path: PropTypes.string,
  isAdmin: PropTypes.bool.isRequired,
  spacing: PropTypes.number,
  justify: PropTypes.string,
  id: PropTypes.string.isRequired,
  components: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
};

export default connect(state => ({ isAdmin: isAuth(state) }))(Section);
