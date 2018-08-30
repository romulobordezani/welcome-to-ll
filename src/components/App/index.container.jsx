import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// > Components
import Header from '../layout/Header';
import SearchAddressForm from '../SearchAddressForm';
import Address from '../Address';

// > Actions
import getAddressByCep from '../../actions/address';

class App extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { address, searchAddressByCep } = this.props;
    const { list: addressList } = address;
    return (
      <div>
        <Header />
        <SearchAddressForm searchAddressByCep={searchAddressByCep} />
        {addressList.map(locale => {
          return <Address key={locale.cep} locale={locale} />;
        })}
      </div>
    );
  }
}

App.propTypes = {
  address: PropTypes.any.isRequired,
  searchAddressByCep: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    address: state.address
  };
};

const mapDispatchToProps = {
  searchAddressByCep: getAddressByCep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
