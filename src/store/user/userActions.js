import USER_ACTION_TYPES from "./userActionTypes";

export const setCurrentUser = (user) => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};

export const checkUserSession = () => {
  return {
    type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  };
};

export const googleSignInStart = () => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_SIGNIN_START,
  };
};

export const emailSignInStart = (email, password) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGNIN_START,
    payload: { email, password },
  };
};

export const signInSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.SIGNIN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGNIN_FAILURE,
    payload: error,
  };
};

export const signUpStart = (email, password, displayName) => {
  return {
    type: USER_ACTION_TYPES.SIGNUP_START,
    payload: { email, password, displayName },
  };
};

export const signUpFailure = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGNUP_FAILURE,
    payload: error,
  };
};

export const signOutStart = () => {
  return {
    type: USER_ACTION_TYPES.SIGNOUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: USER_ACTION_TYPES.SIGNOUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGNOUT_FAILURE,
    payload: error,
  };
};
