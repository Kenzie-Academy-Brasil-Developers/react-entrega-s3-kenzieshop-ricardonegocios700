import { ADD_TO_CART, LIST_CART, REMOVE_TO_CART } from "./actionTypes";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_CART:
      return state;
    case ADD_TO_CART:
      return [...state, action.product];
    case REMOVE_TO_CART:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
