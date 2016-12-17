import { browserHistory, Router } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} />,
  document.querySelector('#app')
);
