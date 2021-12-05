import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import {apiArt} from 'services';

import {setListArts, setDetailArt} from './actions';

export function* getListArts({payload}) {
  try {
    const resp = yield call(apiArt.get, '');
    const {data} = resp.data;
    yield put(setListArts(data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail' + err,
    );
    yield put(setListArts([]));
  }
}

export function* getDetailArt({payload}) {
  try {
    const resp = yield call(api.get, `/${payload._id}`);
    yield put(setDetailArt(resp.data));
  } catch (err) {
    yield put(setDetailArt([]));
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export default all([
  takeLatest('@UPDATE_VALUE/GET_LIST_ARTS', getListArts),
  takeLatest('@UPDATE_VALUE/GET_DETAIL_ART', getDetailArt),
]);
