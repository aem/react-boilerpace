/* global window, document */
import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import { modelMap } from './lib/state';
import Routes from './Routes';
import { store, extras } from './lib/store';
import './style/index.scss';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
// use our model map to initialize our immutable Records in our state
Object.keys(initialState).forEach((k) => {
  initialState[k] = new modelMap[k](initialState[k]);
});
const finalStore = createStore(store, initialState, extras);

ReactDOM.render(
  <Provider store={finalStore}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('app')
);
