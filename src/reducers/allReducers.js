import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';

const allReducers = combineReducers({
  recipes,
  user,
  form: formReducer,
});

export default allReducers;