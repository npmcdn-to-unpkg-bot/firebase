import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="12" activeClassName="active">View</Link></li>
        <li><Link to="add" activeClassName="active">Add</Link></li>
        <li><Link to="edit/12" activeClassName="active">Edit</Link></li>
        <li><Link to="delete/12" activeClassName="active">Delete</Link></li>
      </ul>
    )
  }
}

export default NavBar;
