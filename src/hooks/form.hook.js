import { useState } from 'react';

const useFormState = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = e => setValue(e.target.value);

  return [value, handleChange];
};

export default useFormState;
