import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer';
import AuthService from './services/AuthService';

AuthService.checkForLoggedInUser(() => {
  console.log('I am running');
  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, document.getElementById('app'));
  });
})
