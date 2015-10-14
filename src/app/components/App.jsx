import React from 'react';
import TopBar from './TopBar';
import Welcome from './Welcome';

export default class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <TopBar />
        <Welcome />
      </div>
    );
  }
}
