import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getPostAction,
  postLoaddingSelector,
  postSelector,
  updatePostAction,
  createPostAction,
  postStateRequestSelector,
} from '../../store/posts';

export const useEditor = () => {
  const dispatch = useDispatch();
  const post = useSelector(postSelector);
  const isLoadding = useSelector(postLoaddingSelector);
  const requestState = useSelector(postStateRequestSelector);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  useEffect(() => {
    if (Number(id)) {
      dispatch(getPostAction(id));
    }
  }, [dispatch, id, getPostAction]);

  const onSubmit = ({ title, body }) => {
    if (post) {
      dispatch(updatePostAction({ title, body, userId: post.userId, id: post.id }));
    } else {
      dispatch(createPostAction({ title, body, userId: 1 }));
    }
  };

  return {
    isLoadding,
    register: register({ required: true }),
    handleSubmit: handleSubmit(onSubmit),
    post,
    isUpdate: Boolean(Number(id)),
    requestState,
  };
};
