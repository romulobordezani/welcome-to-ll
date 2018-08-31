import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  NOT_FOUND_ADDRESS,
  LOADING_ADDRESS,
  SEARCH_ADDRESS,
  RESET_ERRORS_ADDRESS
} from '../constants/actionTypes';

const initialState = {
  list: [],
  errors: []
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADDRESS: {
      return {
        ...state,
        loading: true,
        errors: []
      };
    }

    case ADD_ADDRESS: {
      const updatedAddressList = state.list;
      updatedAddressList.unshift(action.payload);
      return {
        ...state,
        list: updatedAddressList,
        loading: false
      };
    }

    case REMOVE_ADDRESS: {
      return {
        ...state,
        list: state.list.filter(element => element !== action.address),
        errors: []
      };
    }

    case SEARCH_ADDRESS: {
      return {
        ...state,
        errors: []
      };
    }

    case RESET_ERRORS_ADDRESS: {
      return {
        ...state,
        errors: []
      };
    }

    case NOT_FOUND_ADDRESS: {
      const updatedErrorList = state.errors;
      updatedErrorList.push(action.message);
      return {
        ...state,
        errors: updatedErrorList
      };
    }

    default: {
      return state;
    }
  }
};

export default address;
