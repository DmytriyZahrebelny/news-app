import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getAllPosts, getPost } from '../../api';
import { ALL_POSTS_REQUESTS, GET_ALL_POSTS, POST_REQUESTS, GET_POST } from './constants';

export const getAllPostsAction = () => ({
  type: ALL_POSTS_REQUESTS,
});

export const getPostAction = (id) => ({
  type: POST_REQUESTS,
  payload: id,
});

export function* getAllPostsSaga() {
  const posts = yield call(getAllPosts);

  yield put({
    type: GET_ALL_POSTS,
    payload: posts.data,
  });
}

export function* getPostSaga(data) {
  const post = yield call(getPost, data.payload);

  yield put({
    type: GET_POST,
    payload: post.data,
  });
}

export function* postsSaga() {
  yield all([
    takeEvery(ALL_POSTS_REQUESTS, getAllPostsSaga),
    takeEvery(POST_REQUESTS, getPostSaga),
  ]);
}
