import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App/index.container';
import NotFound from './components/NotFound';

export default () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
      <Route component={NotFound} />
    </Switch>
  );
};
