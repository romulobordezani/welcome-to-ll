// /* eslint-env browser */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import Routes from './routes';
import reducers from './reducers';
import cepSearchSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';

// > Styles
import './assets/styles/index.scss';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
const history = createBrowserHistory();

sagaMiddleware.run(cepSearchSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
