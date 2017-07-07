import { combineReducers } from 'redux';
import sample from './sample';
// import another from './another';

const appReducer = combineReducers({
  sample,
  // another,
});

export default appReducer;
