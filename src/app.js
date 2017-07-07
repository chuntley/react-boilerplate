import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import LayoutContainer from './components/LayoutContainer';

render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <LayoutContainer />
    </BrowserRouter>
  </Provider>,
document.getElementById('app'));

if (module.hot) module.hot.accept();
