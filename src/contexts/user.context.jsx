import { createContext, useState, useEffect, useReducer } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const userActions = {
  TOGGLE_USER: "TOGGLE_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActions.TOGGLE_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(
        `this type ${type} doesnot have any reducer to handle it.`
      );
  }
};

const initialState = {
  currentUser: null,
};

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const value = { currentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch({ type: userActions.TOGGLE_USER, payload: user });
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
