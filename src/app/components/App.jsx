import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Welcome from './Welcome';

export default class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div id="inner-app">
        <SideBar />
        <div className="pusher">
          <TopBar />
          <Welcome />
        </div>
      </div>
    );
  }
}
