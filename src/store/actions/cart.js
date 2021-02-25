import * as actionTypes from "./actionTypes";

export const setCart = (cartItems) => {
  return {
    type: actionTypes.SET_CART,
    cartItems: cartItems,
  };
};
export const setTotalPrice = () => {
  return {
    type: actionTypes.SET_TOTAL_PRICE,
  };
};

export const cartPost = (orderProps) => {
  return (dispatch) => {
    dispatch(setCart(orderProps));
  };
};
