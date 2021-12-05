import produce from 'immer';

const INITIAL_STATE = {
  _id: 0,
  data: null,
  arts: [],
  art: [],
  loading: false,
  filter: {
    name: '',
    types: 0,
  },
};

export default function Companys(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      _id: any;
      data: null;
      arts: [];
      art: [];
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
        draft.arts = action.payload.arts;
        draft.loading = false;
        break;
      }
      case '@UPDATE_VALUE/GET_DETAIL_ART': {
        draft._id = action.payload._id;
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_DETAIL_ART': {
        draft.art = action.payload.art;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
