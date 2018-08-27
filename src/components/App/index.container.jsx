import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './App.scss';

import Header from '../layout/Header';
import SearchForm from '../SearchForm';
import Address from '../Address';

class App extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { address } = this.props;
    const { list: addressList } = address;
    return (
      <div className={styles.App}>
        <Header />
        <SearchForm />
        {addressList.map(locale => {
          return <Address key={locale.cep} locale={locale} />;
        })}
      </div>
    );
  }
}

App.propTypes = {
  address: PropTypes.any.isRequired
};

const mapStateToProps = state => {
  return {
    address: state.address
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
