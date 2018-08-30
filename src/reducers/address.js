import { ADD_ADDRESS, REMOVE_ADDRESS } from '../constants/actionTypes';

const initialState = {
  list: []
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      const updatedAddressList = state.list;
      updatedAddressList.push(action.payload);
      return {
        ...state,
        list: updatedAddressList
      };
    }

    case REMOVE_ADDRESS: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
};

export default address;
