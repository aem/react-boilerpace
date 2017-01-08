import expect from 'expect';
import { types as Actions } from '../../src/actions/testActions';
import testReducer from '../../src/reducers/testReducer';

describe('Reducer: test', function() {
  let model = testReducer();

  it('should setup properly', () => {
    expect(model.rootText).toBe('test');
  });

  it('should respond to changes', () => {
    model = testReducer(model, { type: Actions.UPDATE_TEXT, data: 'testing' });
    expect(model.rootText).toBe('testing');
  });
});
