import {
  put, takeEvery, takeLatest, fork,
} from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions/sample';

export function* initialLoadSaga() {
  yield put(actions.addInitialLoadProgress());
  yield put(actions.addInitialLoadComplete());
}

export function* incrementSaga() {
  yield put(actions.incrementOne());
}

export function* watchInitialLoad() {
  yield takeEvery(types.ADD_INITIAL_LOAD, initialLoadSaga);
}

export function* watchIncrement() {
  yield takeLatest(types.INCREMENT_COUNTER, incrementSaga);
}

export default [
  fork(watchInitialLoad),
  fork(watchIncrement),
];
