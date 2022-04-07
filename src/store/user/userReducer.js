import USER_ACTION_TYPES from "./userActionTypes";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case USER_ACTION_TYPES.SIGNIN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPES.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
