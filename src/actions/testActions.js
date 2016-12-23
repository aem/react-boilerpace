import createAction from '../lib/createAction';
import keyMirror from 'keymirror';

export const types = keyMirror({
  UPDATE_TEXT: null
});

export const updateText = (text) => createAction(types.UPDATE_TEXT)(text);
