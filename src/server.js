// Setup env variables with dotenv.
import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV == 'production' ?
    './production.env' :
    './development.env',
    silent: true
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

// TODO: Add API and AUTH routes to server.

// Define React App main route.
app.get('/*', (req, res) => {
  Router.run(routes, req.url, Handler => {
    let rendered = React.renderToString(<Handler />);
    res.render('index', { content: rendered, title: process.env.TITLE });
  });
});

// Start the server.
import http from 'http';
let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
