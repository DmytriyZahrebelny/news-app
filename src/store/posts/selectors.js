import { moduleName } from './constants';

export const postsSelector = (state) => state[moduleName].posts;
export const postSelector = (state) => state[moduleName].post;
export const postLoaddingSelector = (state) => state[moduleName].loadding;
