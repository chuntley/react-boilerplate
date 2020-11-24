import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <NotFound default />
  </Router>
);
