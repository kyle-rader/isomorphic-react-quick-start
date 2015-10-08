import React from 'react';

export default class Welcome extends React.Component {

    _handleClick() {
      alert('hii!');
    };

    render() {
      return (
        <div>
          <div id="top-bar">
            <a href="#">Some Link</a>&nbsp;|&nbsp;
            <a href="#">Some Link</a>&nbsp;|&nbsp;
            <a href="#">Some Link</a>&nbsp;|&nbsp;
            <button onClick={this._handleClick}>A button</button>
          </div>
          <h1>Hello, World</h1>
          <p>This is a React starter template written in coffeescript.</p>
          <p>Hey, I have a <a href="https://benzhang.xyz/">blog</a>!</p>
          <p><i className="fa fa-star"></i> Star this project on <a href="https://github.com/ben-z/react-starter-coffee-tutorial"> Github</a></p>
        </div>
      );
    };
}
