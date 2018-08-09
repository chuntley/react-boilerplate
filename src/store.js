import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './redux/reducers';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default store;
