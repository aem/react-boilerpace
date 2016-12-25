/* global window, document */
import { browserHistory, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { store, extras } from './lib/store';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const finalStore = createStore(store, initialState, extras);

ReactDOM.render(
  <Provider store={finalStore}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('app')
);
