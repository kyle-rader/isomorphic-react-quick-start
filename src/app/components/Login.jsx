import React from 'react';
import Auth from '../services/AuthService';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    let email = this.refs.emailInput.getDOMNode().value;
    let password = this.refs.passwordInput.getDOMNode().value;

    Auth.login(email, password, (err) => {
      if(err)
        console.log('Error calling Auth.login =>', err);
    });
  }

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
                    <input ref="emailInput" className="ui input" name="email" type="text" autoComplete="off" />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                    <div className="ui left icon input">
                      <input ref="passwordInput" className="ui input" name="password" type="password" autoComplete="off" />
                      <i className="lock icon"></i>
                    </div>
                </div>
                <button className="ui blue submit button" type="submit" onClick={this.login.bind(this)}>Log In</button>
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
