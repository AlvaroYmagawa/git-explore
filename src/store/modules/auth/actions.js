import types from './types';

// SIGN IN
export function signUp(user) {
  return {
    type: types.SIGN_UP.REQUEST,
    payload: { user },
  };
}
export function signUpSuccessful(user) {
  return {
    type: types.SIGN_UP.SUCCESSFUL,
    payload: { user },
  };
}
export function signUpFailed(user) {
  return {
    type: types.SIGN_UP.FAILED,
    payload: { user },
  };
}

// SIGN IN
export function signIn(session) {
  return {
    type: types.SIGN_IN.REQUEST,
    payload: { session },
  };
}
export function signInSuccessful(token, user) {
  return {
    type: types.SIGN_IN.SUCCESSFUL,
    payload: { token, user },
  };
}
export function signInFailed() {
  return {
    type: types.SIGN_IN.FAILED,
  };
}

// SIGN OUT
export function signOut() {
  return {
    type: types.SIGN_OUT,
  };
}
