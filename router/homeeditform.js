import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.js';

class HomeEditForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Edit '{this.props.params.id}'</h1>
        <NavBar />
      </div>
    )
  }
}

export default HomeEditForm;
