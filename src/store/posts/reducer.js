import { GET_ALL_POSTS, POST_REQUESTS, GET_POST } from './constants';

const initialState = {
  loadding: false,
  posts: [],
  post: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUESTS:
      return { ...state, loadding: true, post: null };
    case GET_ALL_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST:
      return { ...state, post: action.payload, loadding: false };

    default:
      return state;
  }
};
