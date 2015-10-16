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
      let text = '';
      for (let i = 0; i < 1000; i++) {
        text += 'These are words.  These are more... words!<br>';
      }
      return (
        <div className="ui container">
          <img className="ui centered medium image hidden transition agendi-landing-img" src="/assets/img/agendi-black.svg"></img>
          <p>{text}</p>
        </div>
      );
    };
}