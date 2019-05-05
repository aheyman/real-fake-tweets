import * as msg from '../constants/action-types';

export const simpleAction = payload => ({
  type: msg.SIMPLE_ACTION,
  payload,
});

export const userSelect = payload => ({
  type: msg.USER_SELECTION,
  payload,
});
