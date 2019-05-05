import * as msg from '../constants/action-types';

// Remove once addtional action types are defined
// eslint-disable-next-line
export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case msg.SIMPLE_ACTION:
      return {
        result: action.payload,
      };
    case msg.USER_SELECTION:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
