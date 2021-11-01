import React from "react";

import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary";
import routes from "../routes";

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Layout>{routes}</Layout>
    </ErrorBoundary>
  );
};

export default App;
