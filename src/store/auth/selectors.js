import { moduleName } from './constants';

export const authSelector = (state) => state[moduleName].isAuth;
