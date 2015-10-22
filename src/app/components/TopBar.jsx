import React from 'react';
import { Link } from 'react-router';

export default class TopBar extends React.Component {

  componentDidMount() {
    let mainMenu = $('#main-menu');
    mainMenu.sticky({
      context: mainMenu.parent()
    });
    mainMenu.find('.ui.dropdown').dropdown({});
  }

  render() {
    let rightMenu;
    if (this.props.loggedIn) {
      rightMenu =
      <div className="right menu">
        <a className="item" onClick={this.props.logoutCallback}>
          <i className="power off icon"></i>
          Log Out
        </a>
      </div>;
    }
    else {
      rightMenu =
      <div className="right menu">
        <Link className="item" to="login">
          <i className="power off icon"></i>
          Log In
        </Link>
        <a className="item" to="login">
          <i className="signup icon"></i>
          Sign Up
        </a>
      </div>;
    }

    return (
      <div id="main-menu" className="ui small inverted top sticky labeled icon menu">
        <div className="ui container">
          <div className="ui dropdown item">
            <i className="bars icon"></i>Menu
            <div className="menu">
              <Link className="item" to="home">
                <i className="home icon"></i>Home
              </Link>
              <Link className="item" to="search">
                <i className="search icon"></i>Search
              </Link>
              <Link className="item" to="about">
                <i className="info icon"></i>About
              </Link>
            </div>
          </div>
          {rightMenu}
        </div>
      </div>
    );
  }
}
