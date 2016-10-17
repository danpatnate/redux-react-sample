// include react and app files
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';
import adminApp from './reducers';
import './actions/interceptors';

// include assets
import './assets';

const store = createStore(adminApp);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
