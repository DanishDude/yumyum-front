import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';
import userRecipes from './userRecipes';

const allReducers = combineReducers({
  recipes,
  user,
  userRecipes,
  form: formReducer,
});

export default allReducers;