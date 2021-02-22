import { useDispatch, useSelector } from 'react-redux';

import { deletePostAction, postsSelector } from '../../store/posts';

export const useProfile = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);

  const deletePostHandler = (id) => () => {
    dispatch(deletePostAction(id));
  };

  return {
    posts,
    deletePostHandler,
  };
};
