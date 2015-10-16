import React from 'react';
import TopBar from './TopBar';
import Router from 'react-router';

let RouteHandler = Router.RouteHandler;

export default class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <TopBar />
        <RouteHandler />
      </div>
    );
  }
}
