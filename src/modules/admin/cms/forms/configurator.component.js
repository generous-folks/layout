import React, { useState } from 'react';

import { PARENT_PROPS } from '../../../../engine/template.constants';
import Radios from './radios.component';
import SelectForm from './select.component';

const renderFormForProps = (props, options) =>
  Object.keys(props).map(prop => {
    switch (prop) {
      case 'xs':
      case 'sm':
      case 'md':
      case 'lg':
        return (
          <SelectForm
            title={prop}
            value={options.radioValues[prop]}
            onChange={options.handleRadioChange}
            property={props[prop]}
          />
        );

      case 'container':
      case 'gutterBottom':
      case 'inline':
      case 'noWrap':
      case 'item':
        return <div>switch</div>;

      case 'alignItems':
      case 'alignContent':
      case 'direction':
      case 'justify':
      case 'spacing':
      case 'wrap':
      case 'align':
        return (
          <Radios
            title={prop}
            value={options.radioValues[prop]}
            onChange={options.handleRadioChange}
            property={props[prop]}
          />
        );

      default:
        return <div>null</div>;
    }
  });

const Configurator = () => {
  const [radioValues, setRadioValues] = useState({});
  const [switchValues, setSwitchValues] = useState({});

  const handleRadioChange = e => setRadioValues({ ...radioValues, [e.target.name]: e.target.value });
  const handleSwitchChange = e => setSwitchValues({ ...switchValues, [e.target.name]: e.target.value });

  return <>{renderFormForProps(PARENT_PROPS, { radioValues, handleRadioChange, switchValues, handleSwitchChange })}</>;
};

export default Configurator;
