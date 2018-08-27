import { ADD_ADDRESS, REMOVE_ADDRESS } from '../constants/actionTypes';

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
      gia: '1004',
      lat: -23.55052,
      lng: -46.633308
    },
    {
      cep: '02050-011',
      logradouro: 'Avenida Verdades',
      complemento: '',
      bairro: 'Santana',
      localidade: 'São Paulo',
      uf: 'SP',
      unidade: '',
      ibge: '3550308',
      gia: '1004',
      lat: -22.932924,
      lng: -47.073845
    }
  ]
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      return {
        ...state
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
