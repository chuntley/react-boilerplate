import React from 'react';

import Layout from './Layout';
import routes from '../routes';

const App = (): JSX.Element => {
  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
