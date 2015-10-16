import React from 'react';

export default class About extends React.Component {

    componentDidMount() {

    }

    render() {
      return (
        <div className="ui container">
          <img className="ui centered small image agendi-landing-img" src="/assets/img/agendi-black.svg"></img>
          <h3 className="ui heading">About Agendi</h3>
          <p>Well, that's all folks!</p>
        </div>
      );
    };
}
