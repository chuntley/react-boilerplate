import React from "react";

import Layout from "@/components/Layout";
import { AppContextProvider } from "@/hooks/useAppContext";
import routes from "@/routes";

const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <Layout>{routes}</Layout>
    </AppContextProvider>
  );
};

export default App;
