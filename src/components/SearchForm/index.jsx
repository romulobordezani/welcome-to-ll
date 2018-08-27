import React, { Component } from 'react';

import styles from './SearchForm.scss';

class SearchForm extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <form className={styles['search-form']}>
        <div className={styles['search-form__label']}>
          <label htmlFor="cep">CEP</label>
        </div>
        <div className={styles['search-form__input']}>
          <input type="text" placeholder="02050-010" />
        </div>
        <div className={styles['search-form__submit-button']}>
          <button type="submit" className="btn-mgl btn-green">
            Buscar
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
