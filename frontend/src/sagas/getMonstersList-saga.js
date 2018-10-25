import { takeLatest, call, put } from 'redux-saga/effects';
import app from '../config/app-Feathers';

export default function* getMonstersListWatcherSaga() {
  console.log("monster watcher")
    yield takeLatest("GETMONSTERS_REQUEST" , getMonstersListWorkerSaga);
  }

function* getMonstersListWorkerSaga() {
  try {
    const response = yield call(getMonsters);
    yield put({ type: "GETMONSTERS_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "GETMONSTERS_FAILURE", payload: error });
  }
}
function getMonsters() {
  console.log("monster find function")
    return app.service('monsters').find()
}