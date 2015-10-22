
import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import RouterContainer from './services/RouterContainer';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

let routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <Route name="login" handler={Login} />
    <Route path="*" handler={Home} />
  </Route>
);

RouterContainer.set(Router.create({routes}));

export default routes;
