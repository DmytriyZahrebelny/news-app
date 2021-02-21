import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getAllPostsAction } from './store/posts';
import { Header } from './components/Header';
import { NewsList } from './views/NewsList/NewsList';
import { Auth } from './views/Auth';
import { Post } from './views/Post/Post';
import { Profile } from './views/Profile';
import { ROUTS } from './app.constants';
import { authSelector } from './store/auth';
import { Editor } from './views/Editor/Editor';
import { useAppStyles } from './useAppStyles';
import './index.css';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelector);
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
          <Route path={`${ROUTS.profile}/:id`}>
            {isAuth ? <Editor /> : <Redirect to={ROUTS.auth} />}
          </Route>
          <Route path={ROUTS.profile}>{isAuth ? <Profile /> : <Redirect to={ROUTS.auth} />}</Route>
          <Route path={`${ROUTS.posts}/:id`} component={Post} />
          <Route path={[ROUTS.root, ROUTS.posts]} component={NewsList} />
        </Switch>
      </div>
    </>
  );
};
