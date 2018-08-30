const dev = {
  google: {
    maps_key: 'AIzaSyAOJktD5jQocFOCM6SBjW3iMAWqI4afS7E'
  }
};

const prod = {
  google: {
    maps_key: 'AIzaSyAOJktD5jQocFOCM6SBjW3iMAWqI4afS7E'
  }
};

const config = process.env.REACT_APP_ENVIRONMENT === 'production' ? prod : dev;

export default {
  // > Shared configs here
  ...config
};
