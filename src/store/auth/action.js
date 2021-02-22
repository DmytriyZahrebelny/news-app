import { AUTH } from './constants';

export const authAction = (payload) => {
  if (payload) {
    localStorage.setItem('auth', true);
  }

  return {
    type: AUTH,
    payload,
  };
};
