import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { Row, Col } from '../lib/grid.components';

const renderTemplatePicker = items =>
  Object.keys(items).map(name => (
    <MenuItem key={name} value={name}>
      {name}
    </MenuItem>
  ));

const SelectTemplateElement = props => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <InputLabel style={{ display: 'flex' }} htmlFor="persons">
          Add Element
        </InputLabel>
        <Select
          value={this.state.persons}
          onChange={this.handleChange}
          input={<Input name="persons" id="persons" fullWidth />}
        >
          <MenuItem value="" />
          {renderTemplatePicker(props.items)}
        </Select>
      </Col>
    </Row>
  );
};

SelectTemplateElement.propTypes = {
  items: PropTypes.shape({}).isRequired,
};
export default SelectTemplateElement;
