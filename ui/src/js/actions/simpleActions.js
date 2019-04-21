import { SIMPLE_ACTION } from '../constants/action-types';

const simpleAction = payload => ({
  type: SIMPLE_ACTION,
  payload,
});

export default simpleAction;
