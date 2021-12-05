export function getListArts() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_ARTS',
    payload: {},
  };
}

export function setListArts(arts: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_ARTS',
    payload: {arts},
  };
}

export function getDetailArt(_id: any) {
  return {
    type: '@UPDATE_VALUE/GET_DETAIL_ART',
    payload: {_id},
  };
}

export function setDetailArt(art: any) {
  return {
    type: '@UPDATE_VALUE/SET_DETAIL_ART',
    payload: {art},
  };
}
