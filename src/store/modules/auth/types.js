const types = {
  SIGN_UP: {
    REQUEST: '@auth/SIGN_UP_REQUEST',
    SUCCESSFUL: '@auth/SIGN_UPSUCCESSFUL',
    FAILED: '@auth/SIGN_UP_FAILED',
  },
  SIGN_IN: {
    REQUEST: '@auth/SIGN_IN_REQUEST',
    SUCCESSFUL: '@auth/SIGN_IN_SUCCESSFUL',
    FAILED: '@auth/SIGN_IN_FAILED',
  },
  SIGN_OUT: '@auth/SIGN_OUT',
};

export default types;
