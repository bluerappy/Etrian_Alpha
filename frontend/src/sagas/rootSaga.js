import { all, fork , spawn } from 'redux-saga/effects';
import getMonsterListSaga from './getMonstersList-saga'

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
    console.log("ROOTSTART")
  try {
   yield all([
        spawn (getMonsterListSaga)
   ]);
  }
  catch(error) {

  }
}