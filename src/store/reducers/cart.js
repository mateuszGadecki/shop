import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  cartItems: [],
  totalPrice: [],
};

const setCart = (state, action) => {
  const cart = [...state.cartItems];
  cart.push(action.cartItems);
  return {
    ...state,
    cartItems: cart,
    loading: false,
  };
};

const setTotalPrice = (state, action) => {
  let price = [...initialState.totalPrice];
  let totalPrice = 0;
  if (state.cartItems) {
    state.cartItems.map((e) => {
      return price.push(e.orderDetails.price);
    });
  }
  for (let i in price) {
    totalPrice = totalPrice + price[i] + 15;
  }
  return {
    ...state,
    totalPrice: totalPrice,
  };
};

const updateTotalPriceOnDelete = (state, action) => {
  let currentPrice = [state.totalPrice];
  let updatePrice = currentPrice - action.price - 15;
  return {
    ...state,
    totalPrice: updatePrice,
  };
};

const removeCartItem = (state, action) => {
  let currentItems = [...state.cartItems];
  console.log(action.id);
  console.log(currentItems);
  currentItems.splice(
    currentItems.findIndex((id) => id.orderDetails.id === action.id),
    1
  );
  return {
    ...state,
    cartItems: currentItems,
  };
};

const clearCart = (state, action) => {
  return {
    ...state,
    cartItems: [],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.SET_TOTAL_PRICE:
      return setTotalPrice(state, action);
    case actionTypes.UPDATE_TOTAL_PRICE_ON_DELETE:
      return updateTotalPriceOnDelete(state, action);
    case actionTypes.REMOVE_CART_ITEM:
      return removeCartItem(state, action);
    case actionTypes.CLEAR_CART:
      return clearCart(state, action);
    default:
      return state;
  }
};

export default reducer;
