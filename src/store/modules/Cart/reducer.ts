import produce from 'immer';

const INITIAL_STATE = {
  _id: 0,
  cart: [],
  loading: false,
};

export default function Cart(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      _id: any;
      cart: [];
      loading: false;
    };
  },
) {
  return produce(state, draft => {
    switch (action.type) {
      case '@UPDATE_VALUE/GET_LIST_ARTS': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_ARTS': {
        draft.cart = action.payload.cart;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
