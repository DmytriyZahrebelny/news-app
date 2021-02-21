import { useSelector } from 'react-redux';

import { PostLink } from '../../components/PostLink';
import { ROUTS } from '../../app.constants';
import { postsSelector } from '../../store/posts';
import { useNewsListStyles } from './useNewsListStyles';

export const NewsList = () => {
  const posts = useSelector(postsSelector);
  const classes = useNewsListStyles();

  return (
    <div className={classes.newsList}>
      {posts.map(({ title, id }) => (
        <PostLink key={id} title={title} id={id} url={ROUTS.posts} />
      ))}
    </div>
  );
};
