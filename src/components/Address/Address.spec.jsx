import React from 'react';
import renderer from 'react-test-renderer';
import Address from './index';

const addressMock = {
  'cep':'02418-150',
  'logradouro':'Rua Meropé Dantas Magalhães',
  'complemento':'',
  'bairro':'Parque Mandaqui',
  'localidade':'São Paulo',
  'uf':'SP',
  'unidade':'',
  'ibge':'3550308',
  'gia':'1004',
  'lat':-23.4706772,
  'lng':-46.6307234
};

describe('[Address]', () => {
  it('Renders as the last snapshot', () => {
    const wrapper = renderer.create(<Address handleRemoveAddress={() => {}} locale={addressMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});


