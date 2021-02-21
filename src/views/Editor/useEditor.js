import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getPostAction, postLoaddingSelector, postSelector } from '../../store/posts';
import { updatePost, creatPost, deletePost } from '../../api/api';
import { ROUTS } from '../../app.constants';

export const useEditor = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector(postSelector);
  const isLoadding = useSelector(postLoaddingSelector);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  useEffect(() => {
    if (Number(id)) {
      dispatch(getPostAction(id));
    }
  }, [dispatch, id, getPostAction]);

  const onSubmit = async ({ title, body }) => {
    if (post) {
      updatePost({ title, body, userId: post.userId, id: post.id });
    } else {
      creatPost({ title, body, userId: 1 });
    }

    history.push(ROUTS.posts);
  };

  const deletePostHandler = () => {
    deletePost(id);
    history.push(ROUTS.posts);
  };

  return {
    isLoadding,
    register: register({ required: true }),
    handleSubmit: handleSubmit(onSubmit),
    post,
    isUpdate: Boolean(Number(id)),
    deletePostHandler,
  };
};
