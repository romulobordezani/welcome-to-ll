import React, { Component } from 'react';
import styles from './App.scss';

import Header from '../layout/Header';
import SearchForm from '../SearchForm';
import Map from '../Map';

class Home extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <SearchForm />
        <Map />
        <Map />
        <Map />
        <Map />
      </div>
    );
  }
}

export default Home;
