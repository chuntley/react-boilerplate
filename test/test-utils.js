import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';

function render(
  ui,
  {
    route = '/',
    history = createHistory(createMemorySource(route)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <LocationProvider history={history}>
        {children}
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
