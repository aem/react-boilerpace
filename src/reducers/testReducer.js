const defaultState = {
  rootText: "test"
};

export default function testReducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {rootText: action.data};
    default: return state;
  }
}
