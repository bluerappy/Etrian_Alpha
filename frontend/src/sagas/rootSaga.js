import { all, fork , spawn } from 'redux-saga/effects';
import getMonsterListSaga from './monsters-saga';
import getHeroesListByIdSaga from './heroes-saga';

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
  try {
   yield all([
        spawn (getMonsterListSaga),
        spawn (getHeroesListByIdSaga)
   ]);
  }
  catch(error) {

  }
}