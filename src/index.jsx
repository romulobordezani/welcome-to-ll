// /* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import Routes from './routes';
import reducers from './reducers';

import './assets/styles/index.scss';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
