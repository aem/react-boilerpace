/* global window */
import { applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import store from '../reducers';

const extras = compose(
  applyMiddleware(ReduxThunk),
  (typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.devToolsExtension) ?
    window.devToolsExtension() :
    (f) => f
);

export { store, extras };
