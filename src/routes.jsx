import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/App';
import NotFound from './components/NotFound';

export default () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};
