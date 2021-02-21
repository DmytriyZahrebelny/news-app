import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useProstLinkStyles } from './usePostLinkStyles';

export const PostLink = ({ title, id, url }) => {
  const classes = useProstLinkStyles();

  return (
    <Link className={classes.link} to={`${url}/${id}`}>
      <Typography variant="body1">{title}</Typography>
    </Link>
  );
};
