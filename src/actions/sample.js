export const ADD_INITIAL_LOAD = 'ADD_INITIAL_LOAD';
export const ADD_INITIAL_LOAD_PROGRESS = 'ADD_INITIAL_LOAD_PROGRESS';
export const ADD_INITIAL_LOAD_COMPLETE = 'ADD_INITIAL_LOAD_COMPLETE';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INCREMENT_ONE = 'INCREMENT_ONE';

// sagas
export const addInitialLoad = () => ({ type: ADD_INITIAL_LOAD });
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });

// messages
export const addInitialLoadProgress = () => ({ type: ADD_INITIAL_LOAD_PROGRESS });
export const addInitialLoadComplete = () => ({ type: ADD_INITIAL_LOAD_COMPLETE });
export const incrementOne = () => ({ type: INCREMENT_ONE });
