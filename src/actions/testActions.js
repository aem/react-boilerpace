import keyMirror from 'keymirror';

import createAction from '../lib/createAction';

export const types = keyMirror({
  UPDATE_TEXT: null
});

export const updateText = (text) => createAction(types.UPDATE_TEXT)(text);
