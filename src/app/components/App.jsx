import React from 'react';
import Router from 'react-router';
import LoginStore from '../stores/LoginStore';
import AuthService from '../services/AuthService';
import TopBar from './TopBar';

let RouteHandler = Router.RouteHandler;

export default class App extends React.Component {

  constructor() {
    super()
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  render() {
    return (
      <div>
        <TopBar loggedIn={this.state.userLoggedIn} logoutCallback={this.logout.bind(this)} />
        <RouteHandler />
      </div>
    );
  }
}
