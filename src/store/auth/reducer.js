import { AUTH } from './constants';

const initialState = {
  isAuth: localStorage.getItem('auth') || false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return { isAuth: action.payload };

    default:
      return state;
  }
};
