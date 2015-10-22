// Setup env variables with dotenv.
import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV == 'production' ?
    './production.env' :
    './development.env'
});

// Create an express web app.
import express from 'express';
const app = express();

// Define server port.
const port = process.env.PORT || 3000;

// set up Jade
app.set('views', './src/views');
app.set('view engine', 'jade');

// We need React for server side rendering.
import React from 'react';
import Router from 'react-router';
import routes from './app/routes';

// Setup express to serve static routes.
app.use('/js',  express.static(`${__dirname}/${process.env.JS_FOLDER || 'app'}`));
app.use('/css', express.static(`${__dirname}/${process.env.CSS_FOLDER || 'css'}`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/css/themes/*/assets', express.static(`${__dirname}/assets`));

// Initialize StormPath User management.
// (Must be the last initialized middleware! )
import stormpath from 'express-stormpath';
app.use(stormpath.init(app, {
  website: true,
  web: {
    login: {
      uri: '/sp/login'
    },
    register: {
      uri: '/sp/register'
    }
  },
  postLoginHandler: (account, req, res, next) => {
    console.log(`User: ${account.email}, just logged in!`);
    res.json(account);
  }
}));

// Simple POST route for React to check logged in status of user.
app.post('/getUser', (req, res) => {
  res.status(200).json(req.user && req.user.tenant ? req.user : {err: 'Not logged in.'});
});

// Define React App main route.
import LoginActions from './app/actions/LoginActions';
app.get('/*', (req, res) => {
  if (req.user && req.user.tenant) {
    LoginActions.loginUser(req.user);
  }
  Router.run(routes, req.url, Handler => {
    let rendered = React.renderToString(<Handler user={req.user ? req.user : null} />);
    res.render('index', { content: rendered, title: process.env.TITLE });
  });
});

// Create the server
import http from 'http';
let server = http.createServer(app);

// Start listening once Stormpath is ready.
app.on('stormpath.ready', () => {
  server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
});
