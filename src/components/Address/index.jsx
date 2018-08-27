import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapViewer from './googleMapViewer';

import styles from './Address.scss';

class Address extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { locale } = this.props;
    const { cep, bairro, logradouro, localidade, uf } = locale;
    return (
      <div className={styles.map}>
        <div className={styles['map__info-bar']}>
          <div className={styles['map__info-bar__street']}>{logradouro}</div>
          <div>{bairro}</div>
          <div>
            {localidade} - {uf}
          </div>
          <div>{cep}</div>
          <div className={styles['map__info-bar__close-button']}>X</div>
        </div>
        <div className={styles.map}>
          <GoogleMapViewer locale={locale} />
        </div>
      </div>
    );
  }
}

Address.propTypes = {
  locale: PropTypes.shape({
    cep: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    logradouro: PropTypes.string.isRequired,
    localidade: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired
  }).isRequired
};

export default Address;