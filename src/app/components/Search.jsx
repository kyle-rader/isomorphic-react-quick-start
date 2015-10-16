import React from 'react';

export default class Search extends React.Component {

    componentDidMount() {
      console.log('Getting html');

      $.ajax({
        url: '/parseApi/searchCriteria/wwu',
        success: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });

    }

    render() {

      return (
        <div className="ui container">
          <div id="dump-html"></div>
        </div>
      );
    };
}
