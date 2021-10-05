import { ADD_TO_CART, REMOVE_TO_CART, LIST_CART } from "./actionTypes";

export const addCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeCart = (products) => ({
  type: REMOVE_TO_CART,
  products,
});

export const listCart = (listCart) => ({
  type: LIST_CART,
  listCart,
});
