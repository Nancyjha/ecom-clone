import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
export const increaseProductQuantity=(product)=>{
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: product,
  };
};
export const decreaseProductQuantity=(product)=>{
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: product,
  };
};
export const emptyCart = () => {
  return {
    type: ActionTypes.EMPTY_CART,
  };
};
