import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from './index.jsx';

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

const addressStateMock = {
  list: [addressMock],
  errors: []
};

class mockFakeMaskInput extends React.Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return(
      <div ref={input => { this.cepRef = input; }}  {...{ ...props }}>
        <input type="text" />
      </div>
    )
  }
}

jest.mock('react-text-mask', () => 'mockFakeMaskInput');

describe('[SearchForm]', () => {
  it('Renders as the last snapshot', () => {
    const wrapper = renderer.create(
      <SearchForm
        address={addressStateMock}
        handleResetErrors={() => {}}
        searchAddressByCep={() => {}}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
