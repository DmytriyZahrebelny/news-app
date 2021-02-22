import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getAllPostsAction } from './store/posts';
import { Header } from './components/Header';
import { NewsList } from './views/NewsList/NewsList';
import { Auth } from './views/Auth';
import { Post } from './views/Post/Post';
import { Profile } from './views/Profile';
import { ROUTS } from './app.constants';
import { Editor } from './views/Editor/Editor';
import { useAppStyles } from './useAppStyles';
import { PrivateRoute } from './hocs/PrivateRoute';
import './index.css';

export const App = () => {
  const dispatch = useDispatch();
  const classes = useAppStyles();

  useEffect(() => {
    dispatch(getAllPostsAction());
  }, [dispatch, getAllPostsAction]);

  return (
    <>
      <Header />
      <div className={classes.main}>
        <Switch>
          <Route path={ROUTS.auth} component={Auth} />
          <PrivateRoute
            component={Editor}
            path={`${ROUTS.profile}/:id`}
            redirectPath={ROUTS.auth}
          />
          <PrivateRoute component={Profile} path={ROUTS.profile} redirectPath={ROUTS.auth} />
          <Route path={`${ROUTS.posts}/:id`} component={Post} />
          <Route path={[ROUTS.root, ROUTS.posts]} component={NewsList} />
        </Switch>
      </div>
    </>
  );
};
