import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.lightsalmon,
  },
  headerContainer: {
    width: 1200,
    height: 60,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.colors.black,
    textDecoration: 'none',
  },
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    border: `2px solid ${theme.colors.black}`,
    borderRadius: '50%',
  },
  linkContainer: {
    width: 200,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
