import { addCart, removeCart } from "./action";

export const addToCartThunk = (product) => (dispatch) => {
  dispatch(addCart(product));
};
export const removeToCartThunk = (product, cart) => (dispatch) => {
  let searchItem = cart.findIndex((item) => item.name === product);
  let new2 = [];
  let newArray = cart.concat(new2);
  newArray.splice(searchItem, 1);

  // const newArray = cart.filter((item) => {
  //   return item.name !== product;
  // });
  dispatch(removeCart(newArray));
};
