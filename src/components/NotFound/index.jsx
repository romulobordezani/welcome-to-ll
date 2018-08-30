import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <p> Ooops. This page isn&apos;t available, but I&apos;m...</p>
        <p> Please, hire me :)</p>
      </div>
    );
  }
}

export default NotFound;

// TODO > This 404 page could be prettier and have a link to the app home...
