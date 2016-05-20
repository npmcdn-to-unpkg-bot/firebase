import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.js';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <NavBar />
      </div>
    )
  }
}

export default NotFound;
