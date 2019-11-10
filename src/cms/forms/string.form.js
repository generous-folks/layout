import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StringForm = ({ name, id, setter, path }) => {
  const [text, setText] = useState('Text to edit');
  const handleTextChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    return setter(path, text);
  };

  return (
    <>
      <Typography paragraph color="textPrimary" align="center" />
      <TextField required onChange={handleTextChange} name={name} value={text} id={id} label="Votre texte" fullWidth />
      <Button onClick={handleSubmit}>Enregistrer</Button>
    </>
  );
};

StringForm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default StringForm;
