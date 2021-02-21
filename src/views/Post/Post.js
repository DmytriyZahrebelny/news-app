import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostAction, postSelector, postLoaddingSelector } from '../../store/posts';
import { usePostStyles } from './usePostStyles';

export const Post = () => {
  const dispatch = useDispatch();
  const classes = usePostStyles();
  const { id } = useParams();
  const post = useSelector(postSelector);
  const isLoadding = useSelector(postLoaddingSelector);

  useEffect(() => {
    dispatch(getPostAction(id));
  }, [dispatch, getPostAction]);

  return isLoadding ? (
    <Typography className={classes.title} variant="h6">
      Loadding
    </Typography>
  ) : (
    <>
      <Typography className={classes.title} variant="h4">
        {post?.title}
      </Typography>
      <Typography variant="body1">{post?.body}</Typography>
    </>
  );
};
