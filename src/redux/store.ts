import { createStore, compose } from 'redux';

import reducers from './reducers';
import { SampleState } from './reducers/sample';

export interface ReduxState {
  sample: SampleState;
}

const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
  reducers,
  composeEnhancer(),
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line @typescript-eslint/no-var-requires
  });
}

export default store;
