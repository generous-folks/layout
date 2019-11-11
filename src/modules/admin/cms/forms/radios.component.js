import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { makeStyles, useTheme } from '@material-ui/styles';

const renderRadioForProp = props =>
  props.map(prop => (
    <FormControlLabel labelPlacement="top" key={prop} value={prop.toString()} control={<Radio />} label={prop} />
  ));

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    lineHeight: 3,
  },
  radioGroup: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
  },
}));

const Radios = ({ title, property, value, onChange }) => {
  const classes = useStyles(useTheme());

  return (
    <>
      <FormControl className={classes.formControl} component="fieldset">
        <FormLabel className={classes.formLabel} component="legend">
          {title.toUpperCase()}
        </FormLabel>
        <RadioGroup
          className={classes.radioGroup}
          aria-label={title}
          name={title}
          value={value || property[0]}
          onChange={onChange}
        >
          {renderRadioForProp(property)}
        </RadioGroup>
      </FormControl>
    </>
  );
};

Radios.defaultProps = {
  value: null,
};

Radios.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  property: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default Radios;
