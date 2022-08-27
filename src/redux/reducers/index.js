import { combineReducers } from "redux";
import { cartRedcuer, productsReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  // product: selectedProductsReducer,
  cart:cartRedcuer
});
export default reducers;