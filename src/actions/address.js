import { SEARCH_ADDRESS } from '../constants/actionTypes';

const getAddressByCep = cep => ({ type: SEARCH_ADDRESS, cep });

export default getAddressByCep;
