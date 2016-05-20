import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.js';

class HomeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <NavBar />
      </div>
    )
  }
}

export default HomeList;
