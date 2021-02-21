import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authAction } from '../../store/auth';
import { authMock } from '../../mocks';
import { ROUTS } from '../../app.constants';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = ({ name, password }) => {
    const isAuth = authMock.name === name && authMock.password === password;

    if (!isAuth) {
      setError('Invalid name or password');
    } else {
      setError(false);
      dispatch(authAction(isAuth));
      history.push(ROUTS.root);
    }
  };

  return {
    onSubmit,
    error,
  };
};
