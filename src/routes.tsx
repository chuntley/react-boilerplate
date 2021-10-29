import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
