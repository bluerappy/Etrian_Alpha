import { combineReducers } from 'redux';
import getMonstersListReducer from './getMonstersList-reducer';

const rootReducer = combineReducers({
  monstersList: getMonstersListReducer
})

export default rootReducer;
