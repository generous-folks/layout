import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import { Row, Col } from '../../../lib/grid.components';
import SelectTemplateElement from './forms/parent.connector';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import { getTemplate } from '../../../engine/template.engine';

const useStyles = makeStyles({
  container: {
    width: '95%',
    margin: '0 2.5%',
  },
  card: {
    minHeight: '300px',
  },
  content: {
    width: '100%',
  },
});

const onSubmit = setPage => e => {
  e.preventDefault();

  return setPage();
};

const CMS = props => {
  const classes = useStyles();

  try {
    const { components, setPage } = props;

    const handleClick = onSubmit(setPage);
    return (
      <Row className={classes.container}>
        <Col xs={12} md={12} sm={12}>
          <Card className={classes.card}>
            <CardHeader title="Page" />
            <CardContent className={classes.content}>{components && getTemplate(components)}</CardContent>
          </Card>
        </Col>
        <Col xs={12} md={12} sm={12}>
          <SelectTemplateElement />
        </Col>
        <Col xs={12} md={12} sm={12}>
          <Button onClick={handleClick}>SUBMIT</Button>
        </Col>
      </Row>
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.log('cms error', error);
    return null;
  }
};

CMS.defaultProps = { components: null };

CMS.propTypes = {
  components: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
  setChildElement: PropTypes.func.isRequired,
  setParentElement: PropTypes.func.isRequired,
};

export default CMS;
