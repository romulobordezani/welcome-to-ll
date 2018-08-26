import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};
