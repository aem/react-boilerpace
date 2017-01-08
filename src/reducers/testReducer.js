import DefaultState from '../data/model/TestModel';

export default function testReducer(state = new DefaultState(), action = {}) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return state.merge({ rootText: action.data });
    default: return state;
  }
}
