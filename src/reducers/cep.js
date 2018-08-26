import { ADD_CEP, REMOVE_CEP } from '../constants/actionTypes';

const initialState = {
  list: [
    {
      cep: '02050-010',
      logradouro: 'Rua Miguel Mentem',
      complemento: '',
      bairro: 'Vila Guilherme',
      localidade: 'São Paulo',
      uf: 'SP',
      unidade: '',
      ibge: '3550308',
      gia: '1004'
    }
  ]
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
