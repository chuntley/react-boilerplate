import React from "react";

import Layout from "@/components/Layout";
import routes from "@/routes";

const App = (): JSX.Element => {
  return <Layout>{routes}</Layout>;
};

export default App;
