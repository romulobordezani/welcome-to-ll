import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

import { ADD_ADDRESS, SEARCH_ADDRESS, NOT_FOUND_ADDRESS } from '../constants/actionTypes';

/* function getGeoInfo(address) {
  return axios({
    method: 'get',
    url: `http://maps.google.com/maps/api/geocode/json?address=Avenida%20Rio%20Branco,%20Rio%20de%20Janeiro&sensor=false`
  });
} */
// TODO > Fetch Lat and Long from Google to feed the map

function fetchCepInfo(action) {
  const url = `https://viacep.com.br/ws/${action.cep}/json/?callback=myfn`;
  return fetchJsonp(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
  // TODO > Catch errors
}

function* searchAddressByCep(cep) {
  try {
    const response = yield call(fetchCepInfo, cep);
    yield put({ type: ADD_ADDRESS, payload: response });
  } catch (error) {
    yield put({ type: NOT_FOUND_ADDRESS, error });
  }
}

export default function* watcherSaga() {
  yield takeLatest(SEARCH_ADDRESS, searchAddressByCep);
}
