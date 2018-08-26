import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <div>
        <p> Ooops. Not found route... 404</p>
      </div>
    );
  }
}

export default NotFound;
