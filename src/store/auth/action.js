import { AUTH } from './constants';

export const authAction = (payload) => ({
  type: AUTH,
  payload,
});
