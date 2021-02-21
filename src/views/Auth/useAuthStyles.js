import { makeStyles } from '@material-ui/core';

export const useAuthStyles = makeStyles((theme) => ({
  auth: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 60px)',
  },
  authContainer: {
    width: 600,
    height: 300,
    padding: '60px 40px',
    boxShadow: theme.colors.mainShadow,
    boxSizing: 'border-box',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-around',
    height: '100%',
  },
  button: {
    width: 140,
    height: 50,
    backgroundColor: theme.colors.lightsalmon,
    border: 'none',
    borderRadius: 20,
    cursor: 'pointer',
  },
  error: {
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    color: theme.colors.brown,
  },
}));
