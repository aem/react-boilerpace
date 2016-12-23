import { Record } from 'immutable';

const defaultState = Record({
  rootText: "test"
});

export default function testReducer(state = new defaultState, action) {
  const reducerState = (typeof state === 'object' && !(state instanceof defaultState) && new defaultState().merge(state)) || state;
  switch (action.type) {
    case 'UPDATE_TEXT':
      return reducerState.merge({rootText: action.data});
    default: return reducerState;
  }
}
