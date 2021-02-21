import { makeStyles } from '@material-ui/core';

export const useProfileStyles = makeStyles((theme) => ({
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 0',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    color: theme.colors.white,
    backgroundColor: theme.colors.lightsalmon,
    border: 'none',
    borderRadius: 20,
    cursor: 'pointer',
    textDecoration: 'none',
  },
}));
