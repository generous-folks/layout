import React, { memo } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/styles';

import { Col } from './grid.components';
import LazyImage from '../components/lazyImg.component';
import Controls from '../modules/admin/cms/forms/controls.component';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  margin: {
    margin: '2.5%',
  },
  focusVisible: {},
  focusHighlight: { backgroundColor: 'transparent' },
});

const ImageTile = ({ sizes, actionProps, data, alt, margin, isAdmin, id, path, target, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Col {...sizes}>
      <Card className={margin ? classes.margin : ''}>
        <CardActionArea {...actionProps} classes={omit(classes, ['margin'])}>
          <LazyImage data={data} alt={alt} {...otherProps} />
        </CardActionArea>
      </Card>
      <Controls isAdmin={isAdmin} target={target} id={id} path={path} />
    </Col>
  );
};

ImageTile.propTypes = {
  target: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  actionProps: PropTypes.shape({}).isRequired,
  margin: PropTypes.bool,
  sizes: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default memo(ImageTile);
