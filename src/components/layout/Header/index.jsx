import React, { Component } from 'react';
import styles from './Header.scss';
import logo from './images/logo.png';

class Header extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logo} alt="Consulta de endereço" />
        </div>
        <div className={styles.header__logotype}>Consulta de endereço</div>
      </header>
    );
  }
}

export default Header;

// TODO > What about a stick header?
