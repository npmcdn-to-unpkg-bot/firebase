import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="add">Add</Link></li>
        <li><Link to="edit/12">Edit</Link></li>
        <li><Link to="delete/12">Delete</Link></li>
      </ul>
    )
  }
}

export default NavBar;
