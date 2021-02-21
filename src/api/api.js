import axios from 'axios';

import { BASE_URL, ENDPOINT_MAP } from './api.constants';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllPosts = () => axiosInstance.get(ENDPOINT_MAP.posts);
export const getPost = (id) => axiosInstance.get(`${ENDPOINT_MAP.posts}/${id}`);
export const creatPost = (data) =>
  axiosInstance.post(ENDPOINT_MAP.posts, data, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
export const updatePost = (data) =>
  axiosInstance.put(`${ENDPOINT_MAP.posts}/${data.id}`, data, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
export const deletePost = (id) => axiosInstance.delete(`${ENDPOINT_MAP.posts}/${id}`);
