import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { getOnlyDigits, validateCep, cepMask } from '../../helpers';

import styles from './SearchFormAddress.scss';

class SearchAddressForm extends Component {
  constructor(props) {
    super(...props);

    this.state = {
      cep: '02418-150'
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
    const { handleResetErrors } = this.props;
    handleResetErrors();
  }

  render() {
    const { address } = this.props;
    const { cep, error } = this.state;

    return (
      <form
        className={`${styles['search-form']} ${error || address.errors.length > 0 ? styles['search-form--error'] : ''}`}
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
            type="tel"
            placeholder="02050-010"
            onChange={this.updateCepInput}
          />
          <div className={styles['search-form__alert-wrapper']}>
            {error && <div className={styles['search-form__input__error-label']}>{error.message}</div>}
            {address.errors.map(errorContainer => {
              return (
                <div key={`${errorContainer} ${Math.random()}`} className={styles['search-form__input__error-label']}>
                  {errorContainer}
                </div>
              );
            })}
          </div>
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
  searchAddressByCep: PropTypes.func.isRequired,
  handleResetErrors: PropTypes.func.isRequired,
  address: PropTypes.any.isRequired
};

export default SearchAddressForm;

// TODO > Add at least SnapShoting tests with Jest
