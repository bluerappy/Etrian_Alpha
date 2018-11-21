import { takeLatest, call, put } from 'redux-saga/effects';
import app from '../config/app-Feathers';

export default function* getHeroesByIdWatcherSaga() {
  // console.log("monster watcher")
    yield takeLatest(" GET_HEROES_BY_ID_REQUEST" , getHeroesByIdWorkerSaga);
  }

//get monsterlist worker
function* getHeroesByIdWorkerSaga() {
  try {
    const response = yield call(getHeroesByIdFunction);
    yield put({ type: "GET_HEROES_BY_ID_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "GET_HEROES_BY_ID_FAILURE", payload: error });
  }
}

//CRUD FUNCTIONS//
function getHeroesByIdFunction() {
  // console.log("monster find function")
    return app.service('heroes').find()
}