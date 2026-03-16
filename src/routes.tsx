import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout";
import Count from "./pages/Count";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/count", element: <Count /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
