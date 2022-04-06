import cartTypes from "./cartActionTypes";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case cartTypes.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
