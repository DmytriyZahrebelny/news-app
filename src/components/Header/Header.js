import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useHeaderStyles } from './useHeaderStyles';
import { ROUTS } from '../../app.constants';
import { authSelector } from '../../store/auth';

export const Header = () => {
  const classes = useHeaderStyles();
  const isAuth = useSelector(authSelector);

  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.linkContainer}>
          <Link className={classes.link} to={ROUTS.root}>
            <Typography variant="h6">News</Typography>
          </Link>
          <Link className={classes.link} to={ROUTS.profile}>
            <Typography variant="h6">Profile</Typography>
          </Link>
        </div>
        {isAuth ? (
          <Typography className={classes.user} variant="body1">
            A
          </Typography>
        ) : (
          <Link className={classes.link} to={ROUTS.auth}>
            <Typography variant="body1">Sign In</Typography>
          </Link>
        )}
      </div>
    </div>
  );
};
