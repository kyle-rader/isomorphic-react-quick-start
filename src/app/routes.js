
import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Login from './components/Login';

export default (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <Route name="search" handler={Search} />
    <Route name="login" handler={Login} />

    <Route path="*" handler={Home} />
  </Route>
);
