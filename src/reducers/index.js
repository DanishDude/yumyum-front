import { combineReducers } from 'redux';
import recepies from './recepies';

const allReducers = combineReducers({
  recepies,
});

export default allReducers;