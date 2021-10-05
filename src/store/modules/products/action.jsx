import { LIST_PRODUCTS } from "./actionTypes";

export const listProducts = (products) => ({
  type: LIST_PRODUCTS,
  products,
});
