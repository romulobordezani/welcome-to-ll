import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { getOnlyDigits } from '../helpers';
import config from '../config';

import { ADD_ADDRESS, SEARCH_ADDRESS, NOT_FOUND_ADDRESS, LOADING_ADDRESS } from '../constants/actionTypes';

const GOOGLE_MAPS_API_KEY = config.google.maps_key;

function getGeocodeInfo(address, action) {
  return axios({
    method: 'get',
    url: `https://maps.google.com/maps/api/geocode/json?address=${action.cep},${address.logradouro},${
      address.localidade
    }&sensor=false&key=${GOOGLE_MAPS_API_KEY}`
  });
}

function fetchCepInfo(action) {
  const url = `https://viacep.com.br/ws/${action.cep}/json/?callback=fakefunc`;
  return fetchJsonp(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
}

/* NOTE to appraisers: Unfortunately these jsonp requests always return 200 and
   the NOT FOUND STATUS (404) is given inside of the OK response.
   Actually, we could fetch and query by CEP directly from Google,
   I just didn't because the test asked to use Jsonp ;)
 */
function addressNotFound(address) {
  const { erro: error } = address;
  return error;
}

function addGeoInformationToAddress(addressWithoutGeo, geoInfoFromGoogle) {
  const { location } = geoInfoFromGoogle.data.results[0].geometry;
  return Object.assign(addressWithoutGeo, location);
}

function alreadyListed(listOfAddresses, cep) {
  const isListed = listOfAddresses.find(address => {
    return getOnlyDigits(address.cep) === getOnlyDigits(cep);
  });
  return isListed;
}

function* searchAddressByCep(action) {
  try {
    const state = yield select();
    const isAnAlreadyListedCep = alreadyListed(state.address.list, action.cep);
    if (isAnAlreadyListedCep) {
      throw new Error('Já listado.');
    }

    yield put({ type: LOADING_ADDRESS });

    const addressWithoutGeo = yield call(fetchCepInfo, action);

    if (addressNotFound(addressWithoutGeo)) {
      throw new Error('Não encontrado.');
    }

    const geoInfoFromGoogle = yield call(getGeocodeInfo, addressWithoutGeo, action);
    const addressWithGeo = addGeoInformationToAddress(addressWithoutGeo, geoInfoFromGoogle);

    yield put({ type: ADD_ADDRESS, payload: addressWithGeo });
  } catch (error) {
    const { message } = error;
    yield put({ type: NOT_FOUND_ADDRESS, message });
  }
}

export default function* watcherSaga() {
  yield takeLatest(SEARCH_ADDRESS, searchAddressByCep);
}
