import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { PostLink } from '../../components/PostLink';
import { ROUTS } from '../../app.constants';
import { useProfileStyles } from './useProfileStyles';
import { useProfile } from './useProfile';

export const Profile = () => {
  const classes = useProfileStyles();
  const { deletePostHandler, posts } = useProfile();

  return (
    <div className={classes.profile}>
      <div>
        {posts.map(({ title, id }) => (
          <div className={classes.editContainer} key={id}>
            <PostLink title={title} id={id} url={ROUTS.profile} />

            <div className={classes.linkContainer}>
              <Link to={`${ROUTS.profile}/${id}`} className={classes.editLink}>
                <Typography variant="button">Edit</Typography>
              </Link>
              <button type="button" className={classes.editLink} onClick={deletePostHandler(id)}>
                <Typography variant="button">Delete</Typography>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link className={classes.link} to={`${ROUTS.profile}${ROUTS.create}`}>
        <Typography variant="button">Create new post</Typography>
      </Link>
    </div>
  );
};
