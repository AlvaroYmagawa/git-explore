import produce from 'immer';

// CUSTOM IMPORTS
import { isDataValid } from '~/utils/validations';
import types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,

  // LOADING STATES
  isSigningIn: false,
  isSigningUp: false,
};

export default function usersReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // SIGN_UP
      case types.SIGN_UP.REQUEST: {
        draft.isSigningUp = true;
        break;
      }
      case types.SIGN_UP.SUCCESSFUL: {
        draft.isSigningUp = false;
        break;
      }
      case types.SIGN_UP.FAILED: {
        draft.isSigningUp = false;
        break;
      }

      // SIGN IN
      case types.SIGN_IN.REQUEST: {
        draft.isSigningIn = true;
        break;
      }
      case types.SIGN_IN.SUCCESSFUL: {
        const { token } = action.payload;

        draft.token = token;
        draft.signed = true;

        draft.isSigningIn = false;
        break;
      }
      case types.SIGN_IN.FAILED: {
        draft.isSigningIn = false;
        break;
      }

      // SIGN OUT
      case types.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        draft.isSigningUp = false;
        draft.isSigningIn = false;

        break;
      }
      default:
    }
  });
}
