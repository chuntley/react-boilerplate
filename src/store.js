import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './redux/reducers';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    store.replaceReducer(require('./redux/reducers').default); // eslint-disable-line global-require
  });
}

export default store;
