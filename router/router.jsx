
import React, { PropTypes, Component } from 'react';
// import React from 'react';
import { Route, Router } from 'react-router';
import { DefaultRoute, Link, RouteHandler, hashHistory } from 'react-router';

import LoginHandler from './login.js';
import HomeList from './homelist.js';
import HomeAddForm from './homeaddform.js';
import HomeEditForm from './homeeditform.js';
import HomeDeleteForm from './homedeleteform.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomeList} />
    <Route path="/add" component={HomeAddForm} />
    <Route path="/edit/:id" component={HomeEditForm} />
    <Route path="/delete/:id" component={HomeDeleteForm} />
  </Router>
  ), document.getElementById('app')
);
