import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {
      setTimeout(() => {
        $('.ui.image.agendi-landing-img').transition({
          animation: 'fade in',
          duration: 1500
        });
      }, 40);
    }

    render() {
      return (
        <div className="ui container">
          <img className="ui centered small image hidden transition agendi-landing-img" src="/assets/img/agendi-black.svg"></img>
        </div>
      );
    };
}
