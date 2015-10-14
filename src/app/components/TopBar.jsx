import React from 'react';

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
              <a className="item">
                <i className="home icon"></i>Home
              </a>
              <a className="item">
                <i className="search icon"></i>Search
              </a>
              <a className="item">
                <i className="info icon"></i>About
              </a>
            </div>
          </div>

          <div className="right menu">
            <a className="item">
              <i className="power off icon"></i>
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
