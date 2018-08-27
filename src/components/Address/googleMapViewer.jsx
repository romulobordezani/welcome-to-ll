import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAOJktD5jQocFOCM6SBjW3iMAWqI4afS7E';

class GoogleMapViewer extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { locale } = this.props;
    const GoogleMapInstance = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap defaultCenter={{ lat: locale.lat, lng: locale.lng }} defaultZoom={13}>
          <Marker position={{ lat: locale.lat, lng: locale.lng }} />
        </GoogleMap>
      ))
    );
    return (
      <GoogleMapInstance
        containerElement={<div style={{ height: '260px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
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