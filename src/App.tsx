import React, { FC } from 'react';
import { Layout } from 'components/layouts';
import Router from "./Router"

const App: FC = () => {

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
