import { applyMiddleware, compose } from 'redux';
import store from '../reducers';
import ReduxThunk from 'redux-thunk';

const extras = compose(
  applyMiddleware(ReduxThunk),
  (typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && window.devToolsExtension) ?
    window.devToolsExtension() :
    f => f
);

export {store, extras};
