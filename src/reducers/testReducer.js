import { Record } from 'immutable';

const defaultState = Record({
  rootText: "test"
});

export default function testReducer(state = new defaultState, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return state.merge({rootText: action.data});
    default: return state;
  }
}
