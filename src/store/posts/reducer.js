import {
  GET_ALL_POSTS,
  POST_REQUESTS,
  GET_POST,
  POST_DELETE,
  POST_UPDATE,
  POST_CREATE,
} from './constants';

const initialState = {
  loadding: false,
  posts: [],
  post: null,
  isSuccessRequests: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUESTS:
      return { ...state, loadding: true, post: null, isSuccessRequests: false };
    case GET_ALL_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST:
      return { ...state, post: action.payload, loadding: false };
    case POST_DELETE:
      return { ...state, posts: state.posts.filter(({ id }) => id !== action.payload) };
    case POST_UPDATE:
      return {
        ...state,
        isSuccessRequests: true,
        posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)),
      };
    case POST_CREATE:
      return {
        ...state,
        isSuccessRequests: true,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
};
