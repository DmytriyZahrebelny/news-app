import { combineReducers } from 'redux';
import { postsReducer, moduleName as postsModule } from './posts';
import { authReducer, moduleName as authModule } from './auth';

export default combineReducers({
  [postsModule]: postsReducer,
  [authModule]: authReducer,
});
