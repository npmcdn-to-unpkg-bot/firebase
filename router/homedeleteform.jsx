import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.jsx';

class HomeDeleteForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Delete '{this.props.params.id}'</h1>
        <NavBar />
      </div>
    )
  }
}

export default HomeDeleteForm;
