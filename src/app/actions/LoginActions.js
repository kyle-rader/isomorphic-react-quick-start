import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser: (user) => {
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      user: user
    });

  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/home');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
