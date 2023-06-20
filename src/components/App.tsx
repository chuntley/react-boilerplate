import React from "react";

import Layout from "@/components/Layout";
import routes from "@/routes";
import { AppContextProvider } from "@/hooks/useAppContext";

const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <Layout>{routes}</Layout>
    </AppContextProvider>
  );
};

export default App;
