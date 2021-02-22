import { makeStyles } from '@material-ui/core';

export const useEditorStyles = makeStyles((theme) => ({
  title: {
    width: '100%',
    padding: '20px 0',
  },
  button: {
    display: 'block',
    margin: '40px auto',
    width: 140,
    height: 50,
    backgroundColor: theme.colors.lightsalmon,
    border: 'none',
    borderRadius: 20,
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'center',
    height: 250,
  },
  success: {
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    color: theme.colors.lightseagreen,
  },
}));
