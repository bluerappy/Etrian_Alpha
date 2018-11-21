import { combineReducers } from 'redux';
import monstersReducer from './monsters-reducer';
import heroesReducer from './heroes-reducer';

const rootReducer = combineReducers({
  monstersList: monstersReducer,
  heroesList: heroesReducer,
})

export default rootReducer;
