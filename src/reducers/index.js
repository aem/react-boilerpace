import { createStore, combineReducers, compose } from 'redux';
import testReducer from './testReducer';

const reducer = combineReducers({
  test: testReducer
});

const store = createStore(reducer, undefined, compose(
  (process.env.NODE_ENV === 'development' && window.devToolsExtension) ? window.devToolsExtension() : f => f
));

export default store;
