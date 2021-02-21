import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import { FormField } from '../../components/FormField';
import { useAuthStyles } from './useAuthStyles';
import { useAuth } from './useAuth';

export const Auth = () => {
  const classes = useAuthStyles();
  const { register, handleSubmit } = useForm();
  const { onSubmit, error } = useAuth();

  return (
    <div className={classes.auth}>
      <div className={classes.authContainer}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <FormField name="name" label="Name" inputRef={register({ required: true })} />
          <FormField
            name="password"
            type="password"
            label="Password"
            inputRef={register({ required: true })}
          />
          {error && (
            <Typography className={classes.error} variant="body1">
              {error}
            </Typography>
          )}
          <button className={classes.button} type="submit">
            <Typography variant="button">Sign In</Typography>
          </button>
        </form>
      </div>
    </div>
  );
};
