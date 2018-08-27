import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';

import styles from './Map.scss';

class Map extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const GoogleMapExample = withScriptjs(
      withGoogleMap(() => <GoogleMap defaultCenter={{ lat: 40.756795, lng: -73.954298 }} defaultZoom={8} />)
    );
    return (
      <div className={styles.map}>
        <div className={styles['map__info-bar']}>
          <div className={styles['map__info-bar__street']}>Rua Miguel Mentem</div>
          <div>Vila Guilherme</div>
          <div>São Paulo - SP</div>
          <div>02050-010</div>
          <div className={styles['map__info-bar__close-button']}>X</div>
        </div>
        <GoogleMapExample
          containerElement={<div style={{ height: '260px', width: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOJktD5jQocFOCM6SBjW3iMAWqI4afS7E"
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
