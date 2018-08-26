import { ADD_CEP, REMOVE_CEP } from '../constants/actionTypes';

const initialState = {
  list: []
};

const cep = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CEP: {
      return {
        ...state
      };
    }

    case REMOVE_CEP: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
};

export default cep;
