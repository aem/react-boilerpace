import { combineReducers } from 'redux';

import { reducerMap } from '../lib/state';

const reducer = combineReducers(reducerMap);

export default reducer;
