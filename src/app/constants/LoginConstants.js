var BASE_URL = process.env.NODE_ENV === 'production' ? 'https://agendi.ninja/' : 'http://local.agendi.ninja/';
export default {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + 'sp/login',
  SIGNUP_URL: BASE_URL + 'sp/register',
  GET_USER_URL: BASE_URL + 'getUser',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
}
