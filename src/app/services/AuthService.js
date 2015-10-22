import request from 'request';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL, GET_USER_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(email, password) {
    request({
      url: LOGIN_URL,
      method: 'POST',
      type: 'json',
      json: true,
      body: {
        username: email,
        password: password
      }
    }, (err, res, body) => {
      if (!err && body && body.email) {
        LoginActions.loginUser({email: body.email, fullName: body.fullName});
      }
      else {
        //TODO: Send login error action.
        //LoginActions.loginError(err);
      }
    });
  }

  checkForLoggedInUser(callback) {
    request({
      url: GET_USER_URL,
      method: 'POST'
    }, (err, res, body) => {
      if (!err && res.statusCode === 200 && body) {
        let user = JSON.parse(body);
        if (user && !user.err && user.tenant) {
          console.log('User is logged in.');
          LoginActions.loginUser(user);
        } else {
          console.log('User NOT logged in.');
        }
        callback();
      }
    });
  }

  logout() {
    LoginActions.logoutUser();
  }

  // signup(email, password, extra) {
  //   return this.handleAuth(when(request({
  //     url: SIGNUP_URL,
  //     method: 'POST',
  //     type: 'json',
  //     json: true,
  //     body: {
  //       username: email,
  //       password: password,
  //       customData: extra
  //     }
  //   })));
  // }

}

export default new AuthService()
