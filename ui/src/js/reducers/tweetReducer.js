import * as msg from '../constants/action-types';

// eslint-disable-next-line
export const tweetReducer = (state = {}, action) => {
  switch (action.type) {
    case msg.USER_SELECTION:
      return {
        ...state,
        isReal: action.payload,
      };
    default:
      return state;
  }
};
