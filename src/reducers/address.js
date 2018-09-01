import {
  ADD_ADDRESS,
  ADDED_ADDRESS,
  REMOVE_ADDRESS,
  NOT_FOUND_ADDRESS,
  LOADING_ADDRESS,
  SEARCH_ADDRESS,
  RESET_ERRORS_ADDRESS,
  REMOVED_ADDRESS
} from '../constants/actionTypes';

// /* eslint-env browser */
const persistedAddressList = JSON.parse(localStorage.getItem('cep_list'));

const initialState = {
  list: persistedAddressList || [],
  errors: []
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADDRESS: {
      return {
        ...state,
        loading: true,
        errors: [],
        addedSuccessfully: false
      };
    }

    case ADD_ADDRESS: {
      const updatedAddressList = state.list;
      updatedAddressList.unshift(action.payload);
      return {
        ...state,
        list: updatedAddressList,
        loading: false,
        addedSuccessfully: false
      };
    }

    case ADDED_ADDRESS: {
      return {
        ...state,
        addedSuccessfully: true
      };
    }

    case REMOVED_ADDRESS: {
      return {
        ...state
      };
    }

    case REMOVE_ADDRESS: {
      return {
        ...state,
        list: state.list.filter(element => element !== action.address),
        errors: [],
        loading: false
      };
    }

    case SEARCH_ADDRESS: {
      return {
        ...state,
        errors: [],
        addedSuccessfully: false
      };
    }

    case RESET_ERRORS_ADDRESS: {
      return {
        ...state,
        errors: [],
        loading: false,
        addedSuccessfully: false
      };
    }

    case NOT_FOUND_ADDRESS: {
      const updatedErrorList = state.errors;
      updatedErrorList.push(action.message);
      return {
        ...state,
        errors: updatedErrorList,
        loading: false,
        addedSuccessfully: false
      };
    }

    default: {
      return state;
    }
  }
};

export default address;
