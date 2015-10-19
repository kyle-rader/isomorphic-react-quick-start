import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {

    }

    render() {

      return (
        <div id="login-container" className="ui container">
          <h2 className="ui header center aligned">Login</h2>
          <div className="ui basic segment">
            <div className="ui two column middle aligned very relaxed stackable grid">

              <div className="ten wide column">
                <form className="ui form">
                  <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                      <input className="ui input" name="email" type="text" autoComplete="off" />
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                      <div className="ui left icon input">
                        <input className="ui input" name="password" type="password" autoComplete="off" />
                        <i className="lock icon"></i>
                      </div>
                  </div>
                  <button className="ui blue submit button" type="submit">Log In</button>
                </form>
              </div>

              <div className="ui vertical divider">
                Or
              </div>

              <div className="six wide center aligned column">
                <div className="ui vertical large buttons">
                  <button className="ui facebook button">
                    <i className="facebook icon"></i> Facebook
                  </button>
                  <button className="ui google plus button">
                    <i className="google plus icon"></i> Google
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    };
}
