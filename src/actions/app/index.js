import * as types from './types';

export const setTitle = title => ({
  type: types.SET_TITLE,
  payload: title,
});

export const setColor = color => ({
  type: types.SET_COLOR,
  payload: color,
});
