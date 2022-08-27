import { successToast, errorToast } from "../../toastbar";
import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
const intialCartState = {
  cartItems: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const cartRedcuer = (state = intialCartState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      if (state.cartItems.some((e) => e.id === payload.id)) {
        successToast("Item already available in Cart");
        return state;
      } else {
        payload.quantity = 1;
        state.cartItems.push(payload);
        successToast("Item Added to Cart");
         return {
          ...state,cartItems:[...state.cartItems]
         };
      }
    }
    case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) {
        item.quantity++;
        return {...state,cartItems:[...state.cartItems]};
      } else {
        errorToast("Product not available in cart");
        return state;
      }
    }

    case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) {
        if(item.quantity>1)  item.quantity--;        
        return {...state,cartItems:[...state.cartItems]};
      } else {
        errorToast("Product not available in cart");
        return state;
      }
    }
    case ActionTypes.REMOVE_FROM_CART:
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) {
        state.cartItems.pop(item);
        successToast("Item removed from Cart");
        return {
          ...state,cartItems:[...state.cartItems]
        };
      } else {
        errorToast("Product not available in cart");
        return state;
      }

    case ActionTypes.EMPTY_CART:
       state.cartItems=[];
       return {...state};
    default:
      return state;
  }
};
