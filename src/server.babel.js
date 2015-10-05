// Create an express web app.
import express from 'express';
const app = express();

// Define server port.
const port = process.env.PORT || 3000;

// Define the entry point to the React app.
import index from './app/Index';

// We need React for server side rendering.
import React from 'react';

// Setup express to serve static routes.
app.use('/js', express.static(`${__dirname}/${process.env.JS_FOLDER || 'app'}`));
app.use('/css', express.static(`${__dirname}/${process.env.CSS_FOLDER || 'css'}`));

// TODO: Add API and AUTH routes to server.

// Define React App main route.
app.get('/', (req, res) => {
  let rendered = React.renderToStaticMarkup(React.createElement(index, {component:'Welcome'}));
  res.send(rendered);
});

// Start the server.
import http from 'http';
let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
