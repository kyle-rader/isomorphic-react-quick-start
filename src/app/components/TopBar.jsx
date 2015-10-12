import React from 'react';

export default class TopBar extends React.Component {

  menuClick() {
    console.log('Click button');
    $('.ui.sidebar.main-sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle', 'overlay');
  }

  render() {
    return (
      <div className="ui menu">
        <div className="ui container">
          <a className="item" onClick={this.menuClick}>
            <i className="content icon"></i>Menu
          </a>
        </div>
      </div>
    );
  }
}
