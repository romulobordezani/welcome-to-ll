import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { getOnlyDigits, validateCep, cepMask } from '../../helpers';

import styles from './SearchFormAddress.scss';

class SearchAddressForm extends Component {
  constructor(props) {
    super(...props);

    this.state = {
      cep: ''
    };

    this.handleSearchAddressByCep = this.handleSearchAddressByCep.bind(this);
    this.updateCepInput = this.updateCepInput.bind(this);
  }

  setErrorState(errorMessage) {
    this.setState({
      error: {
        message: errorMessage
      }
    });
  }

  handleSearchAddressByCep(event) {
    event.preventDefault();
    const { searchAddressByCep } = this.props;
    let { cep } = this.state;
    cep = getOnlyDigits(cep);
    const cepValidation = validateCep(cep);
    const isAValidCep = cepValidation.result;

    if (isAValidCep) {
      searchAddressByCep(cep);
      this.setState({ cep: '' });
      return true;
    }

    this.setErrorState(cepValidation.message);
    return null;
  }

  updateCepInput(event) {
    this.setState({
      cep: event.target.value,
      error: null
    });
  }

  render() {
    const { cep, error } = this.state;
    return (
      <form
        className={`${error ? styles['search-form--error'] : ''} ${styles['search-form']}`}
        onSubmit={this.handleSearchAddressByCep}
      >
        <div className={styles['search-form__label']}>
          <label htmlFor="cep">CEP</label>
        </div>
        <div className={styles['search-form__input']}>
          <MaskedInput
            mask={cepMask}
            id="cep"
            value={cep}
            type="text"
            placeholder="02050-010"
            onChange={this.updateCepInput}
          />
          {error && <div className={styles['search-form__input__error-label']}>{error.message}</div>}
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

SearchAddressForm.propTypes = {
  searchAddressByCep: PropTypes.func.isRequired
};

export default SearchAddressForm;

// TODO > Add at least SnapShoting tests with Jest
