import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';
import config from '../../config';

import styles from './Address.scss';
import greenMarker from './assets/map-marker.svg';

const GOOGLE_MAPS_API_KEY = config.google.maps_key;

const defaultMapOptions = {
  disableDefaultUI: true
};

function renderLoading() {
  return (
    <div className={styles['loading-map']} style={{ height: '260px' }}>
      <div className={styles['loading-map__loader']} />
    </div>
  );
}

class GoogleMapViewer extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { locale } = this.props;
    const GoogleMapInstance = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultCenter={{ lat: locale.lat, lng: locale.lng }}
          defaultZoom={13}
          defaultOptions={defaultMapOptions}
          style={{ height: '100%' }}
        >
          <Marker
            position={{ lat: locale.lat, lng: locale.lng }}
            // eslint-disable-next-line
            defaultAnimation={google.maps.Animation.DROP}
            icon={{
              url: greenMarker
            }}
          />
        </GoogleMap>
      ))
    );
    return (
      <GoogleMapInstance
        containerElement={<div style={{ height: '260px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
        loadingElement={renderLoading()}
      />
    );
  }
}

GoogleMapViewer.propTypes = {
  locale: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
};

export default GoogleMapViewer;
