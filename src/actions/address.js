import { SEARCH_ADDRESS, RESET_ERRORS_ADDRESS, REMOVE_ADDRESS } from '../constants/actionTypes';

export const getAddressByCep = cep => ({ type: SEARCH_ADDRESS, cep });
export const resetErrors = () => ({ type: RESET_ERRORS_ADDRESS });
export const removeAddress = address => ({ type: REMOVE_ADDRESS, address });
