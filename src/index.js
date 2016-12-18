import { browserHistory, Router } from 'react-router';
import store from 'lib/createStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.querySelector('#app')
);
