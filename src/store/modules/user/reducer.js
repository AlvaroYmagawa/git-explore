import produce from 'immer';

// CUSTOM IMPORTS
import authTypes from '../auth/types';

const INITIAL_STATE = {
  profile: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN.SUCCESSFUL: {
        const { user } = action.payload;

        draft.profile = user;
        break;
      }

      // SIGN OUT
      case authTypes.SIGN_OUT: {
        draft.profile = {};

        break;
      }
      default:
    }
  });
}
