import { takeLatest, call, put } from 'redux-saga/effects';
import app from '../config/app-Feathers';

export default function* getMonstersListWatcherSaga() {
  // console.log("monster watcher")
    yield takeLatest("GETMONSTERS_REQUEST" , getMonstersListWorkerSaga);
    yield takeLatest("ADD_MONSTERS" , addMonsters);
  }

//get monsterlist worker
function* getMonstersListWorkerSaga() {
  try {
    const response = yield call(getMonstersFunction);
    yield put({ type: "GETMONSTERS_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "GETMONSTERS_FAILURE", payload: error });
  }
}

//add monsters worker
function* addMonsters(monster) {
  try {
    // console.log("add monsters worker")
    const response = yield call(addMonstersFunction, monster.payload);
    // console.log("add response", response)
    yield put({ type: "ADD_MONSTERS_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "ADD_MONSTERS_FAILURE", payload: error });
  }
}
//CRUD FUNCTIONS//
function getMonstersFunction() {
  // console.log("monster find function")
    return app.service('monsters').find()
}

function addMonstersFunction(monster) {
  console.log("add monsters function", monster)
  return app.service('monsters').create({
    name : monster.name,
    type : monster.type,
    healthPoints : monster.healthPoints,
    power : monster.power,
    image : monster.image,
    level : monster.level,
    itemsDrop : monster.items,
    experiencePots : monster.experience
  })
}