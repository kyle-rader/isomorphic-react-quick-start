import React from 'react';

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="ui stackable menu">
        <div className="ui container">
          <a className="item">
            <i className="home icon"></i>Home
          </a>
        </div>
      </div>
    );
  }
}
