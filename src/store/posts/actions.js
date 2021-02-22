import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getAllPosts, getPost, deletePost, updatePost, creatPost } from '../../api';
import {
  ALL_POSTS_REQUESTS,
  GET_ALL_POSTS,
  POST_REQUESTS,
  GET_POST,
  POST_DELETE,
  POST_DELETE_REQUESTS,
  POST_UPDATE,
  POST_UPDATE_REQUESTS,
  POST_CREATE,
  POST_CREATE_REQUESTS,
} from './constants';

export const getAllPostsAction = () => ({
  type: ALL_POSTS_REQUESTS,
});

export const getPostAction = (id) => ({
  type: POST_REQUESTS,
  payload: id,
});

export const deletePostAction = (id) => ({
  type: POST_DELETE_REQUESTS,
  payload: id,
});

export const updatePostAction = (data) => ({
  type: POST_UPDATE_REQUESTS,
  payload: data,
});

export const createPostAction = (data) => ({
  type: POST_CREATE_REQUESTS,
  payload: data,
});

export function* getAllPostsSaga() {
  const posts = yield call(getAllPosts);

  yield put({
    type: GET_ALL_POSTS,
    payload: posts.data,
  });
}

export function* getPostSaga({ payload }) {
  try {
    const post = yield call(getPost, payload);

    yield put({
      type: GET_POST,
      payload: post.data,
    });
  } catch (error) {
    console.loc(error);
  }
}

export function* deletePostSaga({ payload }) {
  try {
    yield call(deletePost, payload);
    yield put({
      type: POST_DELETE,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* updatePostSaga({ payload }) {
  try {
    const { data } = yield call(updatePost, payload);
    yield put({
      type: POST_UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* createPostSaga({ payload }) {
  try {
    const { data } = yield call(creatPost, payload);
    yield put({
      type: POST_CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* postsSaga() {
  yield all([
    takeEvery(ALL_POSTS_REQUESTS, getAllPostsSaga),
    takeEvery(POST_REQUESTS, getPostSaga),
    takeEvery(POST_DELETE_REQUESTS, deletePostSaga),
    takeEvery(POST_UPDATE_REQUESTS, updatePostSaga),
    takeEvery(POST_CREATE_REQUESTS, createPostSaga),
  ]);
}
