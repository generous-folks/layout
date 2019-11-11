import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { CardContent, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import { Col, Row } from '../../../../lib/grid.components';
import { PARENT_COMPONENTS, CHILDREN_COMPONENTS } from '../../../../engine/template.constants';

const renderComponentPicker = components =>
  components.map(name => (
    <MenuItem key={name} value={name}>
      {name}
    </MenuItem>
  ));

const SelectTemplateElement = ({ setChildElement, setParentElement, path, id }) => {
  const [elements, setElements] = useState({ child: '', parent: '' });

  const handleChange = e => {
    setElements({ ...elements, [e.target.name]: e.target.value });
  };

  const handleSubmitParent = () => {
    const uid = id ? id : shortid.generate();
    const pathToComponent = path ? `${path}/${uid}` : uid;

    return setParentElement({ element: elements.parent, id: uid, path: pathToComponent });
  };

  const handleSubmitChild = () => {
    const uid = shortid.generate();
    return setChildElement(elements.child, uid, uid);
  };

  return (
    <Col style={{ margin: '1% auto' }} xs={12} sm={12} md={12}>
      <Card>
        <CardContent spacing={2} component={Row}>
          <FormControl component={Col} xs={6} sm={6} md={6} fullWidth>
            <TextField
              label="Add Parent Element"
              select
              id="parent-component"
              name="parent"
              value={elements.parent}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="Add the parent" onClick={handleSubmitParent}>
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="none" />
              {renderComponentPicker(PARENT_COMPONENTS)}
            </TextField>
          </FormControl>
          <FormControl component={Col} xs={6} sm={6} md={6} fullWidth>
            <TextField
              label="Add Child Element"
              select
              id="child-component"
              name="child"
              value={elements.child}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="Add the child" onClick={handleSubmitChild}>
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="none" />
              {renderComponentPicker(CHILDREN_COMPONENTS)}
            </TextField>
          </FormControl>
        </CardContent>
      </Card>
    </Col>
  );
};

SelectTemplateElement.defaultProps = {
  path: '',
  id: '',
};

SelectTemplateElement.propTypes = {
  setChildElement: PropTypes.func.isRequired,
  setParentElement: PropTypes.func.isRequired,
  path: PropTypes.string,
  id: PropTypes.string,
};

export default SelectTemplateElement;
