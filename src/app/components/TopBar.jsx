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
      <div id="main-menu" className="ui inverted top sticky menu">
        <div className="ui dropdown item">
          <i className="bars icon"></i>Menu
          <div className="menu">
            <a className="item">
              Home <i className="home icon"></i>
            </a>
            <a className="item">
              Search <i className="search icon"></i>
            </a>
          </div>
        </div>

        <div className="right menu">
          <a className="item">
            <i className="user icon"></i>
            Log In
          </a>
        </div>
      </div>
    );
  }
}
