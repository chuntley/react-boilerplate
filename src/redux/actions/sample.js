import * as types from '../types';

// sagas
export const addInitialLoad = () => ({ type: types.ADD_INITIAL_LOAD });
export const incrementCounter = () => ({ type: types.INCREMENT_COUNTER });

// messages
export const addInitialLoadProgress = () => ({ type: types.ADD_INITIAL_LOAD_PROGRESS });
export const addInitialLoadComplete = () => ({ type: types.ADD_INITIAL_LOAD_COMPLETE });
export const incrementOne = () => ({ type: types.INCREMENT_ONE });
