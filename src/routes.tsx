import React from "react";
import { Route, Routes } from "react-router-dom";

import Count from "./pages/Count";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/count" element={<Count />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
