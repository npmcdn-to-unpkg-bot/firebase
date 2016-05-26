
import React, { PropTypes, Component } from 'react';
// import React from 'react';
import { Route, Router } from 'react-router';
import { DefaultRoute, Link, RouteHandler, hashHistory } from 'react-router';

import LoginHandler from './login.js';
import HomeList from './homelist.js';
import HomeView from './homeview.js';
import HomeAddForm from './homeaddform.js';
import HomeEditForm from './homeeditform.js';
import HomeDeleteForm from './homedeleteform.js';
import NotFound from './notfound.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route name="homelist" path="/" component={HomeList} />
    <Route name="homeview" path="/:id" component={HomeView} />
    <Route name="homeadd" path="/add" component={HomeAddForm} />
    <Route name="homeedit" path="/edit/:id" component={HomeEditForm} />
    <Route name="homedelete" path="/delete/:id" component={HomeDeleteForm} />
    <Route path="*" component={NotFound} />
  </Router>
  ), document.getElementById('app')
);
