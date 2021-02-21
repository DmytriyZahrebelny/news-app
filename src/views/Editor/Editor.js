import { Typography } from '@material-ui/core';

import { FormField } from '../../components/FormField';
import { FormTextarea } from '../../components/FormTextarea';
import { useEditor } from './useEditor';
import { useEditorStyles } from './useEditorStyles';

export const Editor = () => {
  const classes = useEditorStyles();
  const { register, handleSubmit, isLoadding, post, deletePostHandler, isUpdate } = useEditor();

  return isLoadding ? (
    <Typography className={classes.title} variant="h6">
      Loadding
    </Typography>
  ) : (
    <div>
      <Typography className={classes.title} variant="h4">
        Editor
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormField
          name="title"
          inputRef={register}
          label="Title"
          value={isUpdate ? post?.title : ''}
        />
        <FormTextarea
          placeholder="Your post"
          inputRef={register}
          name="body"
          value={isUpdate ? post?.body : ''}
        />
        <button className={classes.button} type="submit">
          <Typography variant="button">Update post</Typography>
        </button>
      </form>
      {isUpdate && (
        <button className={classes.button} type="submit" onClick={deletePostHandler}>
          <Typography variant="button">Delete post</Typography>
        </button>
      )}
    </div>
  );
};
