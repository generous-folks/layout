import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

// Material UI
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';

// Components
import { Col } from './grid.components';

// utils
import { getTemplate } from '../engine/template.engine';
import Controls from '../modules/admin/cms/forms/controls.component';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    padding: 0,
  },
});

const ArticleCard = ({ components, sizes, isAdmin = true, path, id, target, ...props }) => {
  const classes = useStyles();

  return (
    <Col component={Card} className={classes.card} {...sizes} {...omit(props, ['container', 'justify'])}>
      <Controls isAdmin={isAdmin} target={target} id={id} path={path} />
      {components && getTemplate(components, path, isAdmin)}
    </Col>
  );
};

ArticleCard.defaultProps = {
  sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
};

ArticleCard.propTypes = {
  target: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  sizes: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
  }),
  id: PropTypes.string.isRequired,
  components: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
};

export default ArticleCard;
