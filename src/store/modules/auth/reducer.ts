import produce from 'immer';

const INITIAL_STATE = {
  login: {
    token: null,
    uid: null,
    client: null,
  },
  user: {},
  signed: false,
  loading: false,
};

export default function auth(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {login: {token: null; uid: null; client: null}; user: {}};
  },
) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.login = action.payload.login;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.login = {token: null, uid: null, client: null};
        draft.user = {};
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
