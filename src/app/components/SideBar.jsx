import React from 'react';

export default class SideBar extends React.Component {

  componentDidMount() {
    $('.main-sidebar.ui.sidebar').sidebar({
      context: $('#inner-app')
    });
  }

  render() {
    let items = {
      'Home': 'home',
      'About': 'info',
      'Settings': 'cog'
    };

    return (
      <div className="ui left vertical inverted labeled icon sidebar menu main-sidebar">
        <a className="item">
          <i className="home icon"></i>Home
        </a>
        <a className="item">
          <i className="search icon"></i>Search
        </a>
        <a className="item">
          <i className="user icon"></i>Profile
        </a>
        <a className="item">
          <i className="info icon"></i>About
        </a>
      </div>
    );
  }
}
