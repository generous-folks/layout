import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import classnames from 'classnames';
// Material UI
import { makeStyles } from '@material-ui/styles';

// Components
import { Col } from './grid.components';

// utils
import { getTemplate } from '../engine/template.engine';
import Controls from '../modules/admin/cms/forms/controls.component';
import { ADMIN_BORDERS } from '../styles/borders.styles';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    padding: 0,
  },
  cardAdmin: {
    margin: '2.5%',
    padding: 0,
    ...ADMIN_BORDERS,
  },
});

const Block = ({ isAdmin, path, components, sizes, id, target, ...props }) => {
  const classes = useStyles();

  return (
    <Col
      component="div"
      className={classnames(isAdmin ? classes.cardAdmin : classes.card)}
      {...sizes}
      {...omit(props, ['component', 'container'])}
    >
      <Controls top="-54px" left="-54px" isAdmin={isAdmin} target={target} id={id} path={path} />
      {components && getTemplate(components, path, isAdmin)}
    </Col>
  );
};

Block.propTypes = {
  target: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  components: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
};

export default Block;
