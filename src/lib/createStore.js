import { applyMiddleware, createStore, compose } from 'redux';
import combinedReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(combinedReducer, compose(
  applyMiddleware(ReduxThunk),
  (typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && window.devToolsExtension) ?
    window.devToolsExtension() :
    f => f
));

export default store;
