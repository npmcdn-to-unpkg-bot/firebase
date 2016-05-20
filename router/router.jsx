
import React, { PropTypes, Component } from 'react';
// import React from 'react';
import { Route, Router } from 'react-router';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class HomeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <a to="add">Add</a>
          </li>
        </ul>
      </div>
    )
  }
}

class HomeAddForm extends React.Component {
  render() {
    return (
      <h1>Add</h1>
    )
  }
}

class HomeEditForm extends React.Component {
  render() {
    return (
      <h1>Edit</h1>
    )
  }
}

class HomeDeleteForm extends React.Component {
  render() {
    return (
      <h1>Delete</h1>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={HomeList} />
    <Route path="/add" component={HomeAddForm} />
    <Route path="/edit/:id" component={HomeEditForm} />
    <Route path="/delete/:id" component={HomeDeleteForm} />
  </Router>
  ), document.getElementById('app')
);
