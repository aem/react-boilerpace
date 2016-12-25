import { Record } from 'immutable';

const DefaultState = Record({
  rootText: 'test'
});

export default function testReducer(state = new DefaultState(), action) {
  const reducerState = (typeof state === 'object' && !(state instanceof DefaultState) && new DefaultState().merge(state)) || state;
  switch (action.type) {
    case 'UPDATE_TEXT':
      return reducerState.merge({ rootText: action.data });
    default: return reducerState;
  }
}
