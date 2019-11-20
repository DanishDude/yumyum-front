import { combineReducers } from 'redux';
import recipes from './recipes';
import user from './user';

const allReducers = combineReducers({
  recipes,
  user,
});

export default allReducers;