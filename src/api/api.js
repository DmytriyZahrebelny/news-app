import axios from 'axios';

import { BASE_URL, ENDPOINT_MAP } from './api.constants';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const heeafers = {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export const getAllPosts = () => axiosInstance.get(ENDPOINT_MAP.posts);
export const getPost = (id) => axiosInstance.get(`${ENDPOINT_MAP.posts}/${id}`);
export const creatPost = (data) => axiosInstance.post(ENDPOINT_MAP.posts, data, heeafers);
export const updatePost = (data) =>
  axiosInstance.put(`${ENDPOINT_MAP.posts}/${data.id}`, data, heeafers);
export const deletePost = (id) => axiosInstance.delete(`${ENDPOINT_MAP.posts}/${id}`, heeafers);
