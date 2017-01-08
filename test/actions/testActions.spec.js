import expect from 'expect';
import { updateText, types } from '../../src/actions/testActions';

describe('Actions: test', function() {
  const update = updateText('some text');
  it('should return action creators', () => {
    expect(typeof update).toBe('object');
  });

  it('should update text', () => {
    expect(update.type).toBe(types.UPDATE_TEXT);
    expect(update.data).toBe('some text');
  });
});
