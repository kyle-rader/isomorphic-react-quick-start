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

          <div className="right menu">
            <Link className="item" to="login">
              <i className="power off icon"></i>
              Log In
            </Link>
            <a className="item" to="login">
              <i className="signup icon"></i>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}
