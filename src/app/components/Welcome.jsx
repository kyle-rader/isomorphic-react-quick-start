import React from 'react';

export default class Welcome extends React.Component {

    componentDidMount() {
      $('.ui.image.agendi-landing-img').transition({
        animation: 'fade in',
        duration: 1500
      });
    }

    render() {
      return (
        <div className="ui container">
          <img className="ui centered medium image hidden transition agendi-landing-img" src="/assets/img/agendi-black.svg"></img>
        </div>
      );
    };
}
