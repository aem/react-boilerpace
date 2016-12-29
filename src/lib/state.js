import { Map, Record } from 'immutable';

import TestModel from '../data/model/TestModel';
import testReducer from '../reducers/testReducer';

const StateContent = Record({ model: '', reducer: '' });

// this map is the authoritative source of reducers and models,
// allowing us to use Records as Redux state objects instead of
// plain objects
const stateContents = new Map({
  test: new StateContent({ model: TestModel, reducer: testReducer })
});

const reducerMap = stateContents.map((v) => v.reducer).toJS();
const modelMap = stateContents.map((v) => v.model).toJS();

export {
  modelMap,
  reducerMap
};
