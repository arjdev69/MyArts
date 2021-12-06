export function getListCart() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_CART',
    payload: {},
  };
}

export function setListCart(cart: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_CART',
    payload: {cart},
  };
}
