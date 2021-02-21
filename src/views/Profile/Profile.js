import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { postsSelector } from '../../store/posts';
import { PostLink } from '../../components/PostLink';
import { ROUTS } from '../../app.constants';
import { useProfileStyles } from './useProfileStyles';

export const Profile = () => {
  const posts = useSelector(postsSelector);
  const classes = useProfileStyles();

  return (
    <div className={classes.profile}>
      <div>
        {posts.map(({ title, id }) => (
          <PostLink key={id} title={title} id={id} url={ROUTS.profile} />
        ))}
      </div>
      <Link className={classes.link} to={`${ROUTS.profile}${ROUTS.create}`}>
        <Typography variant="button">Create new post</Typography>
      </Link>
    </div>
  );
};
