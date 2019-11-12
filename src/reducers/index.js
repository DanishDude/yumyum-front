import { combineReducers } from 'redux';
import recipes from './recipes';

const allReducers = combineReducers({
  recipes,
});

export default allReducers;