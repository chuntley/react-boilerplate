import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import reducer from '../src/redux/reducers';

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    route = '/',
    history = createHistory(createMemorySource(route)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <LocationProvider history={history}>
        <Provider store={store}>
          {children}
        </Provider>
      </LocationProvider>
    );
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    history,
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
