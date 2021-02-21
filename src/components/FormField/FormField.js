import { TextField } from '@material-ui/core';

import { useFormFieldStyles } from './useFormFieldStyles';

export const FormField = ({ name, type = 'text', label, value = '', inputRef }) => {
  const classes = useFormFieldStyles();

  return (
    <TextField
      name={name}
      type={type}
      label={label}
      defaultValue={value}
      inputRef={inputRef}
      className={classes.root}
    />
  );
};
