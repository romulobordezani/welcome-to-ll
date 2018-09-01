import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
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
    this.clearErrors = this.clearErrors.bind(this);

    this.cepRef = React.createRef();
  }

  componentWillReceiveProps(props) {
    if (props.address.addedSuccessfully) {
      this.blurCepField();
      this.setState({
        cep: ''
      });
    }
  }

  setErrorState(errorMessage) {
    this.setState({
      error: {
        message: errorMessage
      }
    });
  }

  blurCepField() {
    // Needed to close the cellphone keyboard after submit using it's enter key
    // eslint-disable-next-line
    findDOMNode(this.cepRef).blur();
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

  clearErrors() {
    const { handleResetErrors } = this.props;
    handleResetErrors();
    this.setState({
      error: null
    });
  }

  render() {
    const { address } = this.props;
    const { cep, error, loading } = this.state;

    return (
      <form
        className={`${styles['search-form']}
        ${error || address.errors.length > 0 ? styles['search-form--error'] : ''}
        ${loading || address.loading ? styles['search-form--loading'] : ''}`}
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
            placeholder={`${address.loading ? 'Buscando...' : 'Ex. 02050-010'}`}
            onChange={this.updateCepInput}
            onBlur={this.clearErrors}
            onFocus={this.clearErrors}
            ref={input => {
              this.cepRef = input;
            }}
            autoFocus
          />
          <div className={`loading-circle ${styles['loading-circle']}`} />
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
          <button type="submit" className="btn-mgl btn-green" disabled={address.loading}>
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
