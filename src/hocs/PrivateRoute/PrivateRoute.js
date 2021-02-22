import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authSelector } from '../../store/auth';

export const PrivateRoute = ({ component: Components, path, redirectPath }) => {
  const isAuth = useSelector(authSelector);

  return <Route path={path}>{isAuth ? <Components /> : <Redirect to={redirectPath} />}</Route>;
};
