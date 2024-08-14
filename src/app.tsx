import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import App from "@/components/App";

const container = document.getElementById("app");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
