import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

export default AuthenticatedComponent(class Search extends React.Component {

  constructor(props) {
    super(props);
  }

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
        <div ref="dumpHtml">{this.props.user ? this.props.user.email : 'No User!'}</div>
      </div>
    );
  };
});
