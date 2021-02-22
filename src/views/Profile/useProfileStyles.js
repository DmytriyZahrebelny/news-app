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
  },
  editContainer: {
    borderBottom: `1px solid ${theme.colors.lightsalmon}`,

    '& a': {
      textDecoration: 'none',
    },
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 200,
  },
  editLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    margin: '10px 0',
    backgroundColor: theme.colors.lightsalmon,
    color: theme.colors.white,
    borderRadius: 20,
    cursor: 'pointer',
    border: 'none',
  },
}));
