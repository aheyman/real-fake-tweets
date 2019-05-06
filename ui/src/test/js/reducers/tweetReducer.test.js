import { tweetReducer } from '../../../js/reducers/tweetReducer';
import * as msg from '../../../js/constants/action-types';

describe('tweetReducer', () => {
  it('Should update the state to true', () => {
    const result = tweetReducer({}, { type: msg.USER_SELECTION, payload: true });

    expect(result).toEqual({
      isReal: true,
    });
  });
});
