import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, TextField, MenuItem } from '@material-ui/core';

const renderListItem = items =>
  items.map(item => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

const SelectForm = ({ title, onChange, value, property }) => (
  <FormControl component="fieldset" style={{ margin: '0 auto', padding: '0 5%' }} fullWidth>
    <TextField label={title} select id={title} name={title} value={value} onChange={onChange}>
      <MenuItem value="none" />
      {renderListItem(property)}
    </TextField>
  </FormControl>
);

SelectForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  property: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default SelectForm;
