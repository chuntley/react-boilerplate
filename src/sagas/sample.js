import { put, takeEvery, takeLatest, fork } from 'redux-saga/effects';

import {
  ADD_INITIAL_LOAD,
  INCREMENT_COUNTER,
  addInitialLoadProgress,
  addInitialLoadComplete,
  incrementOne,
} from '../actions/sample';

export function* initialLoadSaga() {
  yield put(addInitialLoadProgress());
  yield put(addInitialLoadComplete());
}

export function* incrementSaga() {
  yield put(incrementOne());
}

export function* watchInitialLoad() {
  yield takeEvery(ADD_INITIAL_LOAD, initialLoadSaga);
}

export function* watchIncrement() {
  yield takeLatest(INCREMENT_COUNTER, incrementSaga);
}

export default [
  fork(watchInitialLoad),
  fork(watchIncrement),
];
