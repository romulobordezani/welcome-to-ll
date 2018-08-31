import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// > Components
import Header from '../layout/Header';
import SearchAddressForm from '../SearchAddressForm';
import Address from '../Address';

// > Actions
import { getAddressByCep, resetErrors, removeAddress } from '../../actions/address';

// > Style
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { address, searchAddressByCep, handleResetErrors, handleRemoveAddress } = this.props;
    const { list: addressList } = address;
    return (
      <div>
        <Header />
        <SearchAddressForm
          address={address}
          handleResetErrors={handleResetErrors}
          searchAddressByCep={searchAddressByCep}
        />
        <TransitionGroup className={styles['addresses-wrapper']}>
          {addressList.map(locale => (
            <CSSTransition key={locale.cep} timeout={500} classNames="fade">
              <Address handleRemoveAddress={handleRemoveAddress} locale={locale} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  address: PropTypes.any.isRequired,
  searchAddressByCep: PropTypes.func.isRequired,
  handleResetErrors: PropTypes.func.isRequired,
  handleRemoveAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    address: state.address
  };
};

const mapDispatchToProps = {
  searchAddressByCep: getAddressByCep,
  handleResetErrors: resetErrors,
  handleRemoveAddress: removeAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
