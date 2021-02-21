import { useFormTextareaStyles } from './useFormTextareaStyles';

export const FormTextarea = ({ placeholder, value = '', name, inputRef }) => {
  const classes = useFormTextareaStyles();

  return (
    <textarea
      placeholder={placeholder}
      defaultValue={value}
      name={name}
      ref={inputRef}
      className={classes.textarea}
    />
  );
};
