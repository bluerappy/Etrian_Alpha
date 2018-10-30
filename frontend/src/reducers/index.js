import { combineReducers } from 'redux';
import monstersReducer from './monsters-reducer';

const rootReducer = combineReducers({
  monstersList: monstersReducer
})

export default rootReducer;
