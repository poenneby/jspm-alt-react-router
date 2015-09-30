import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';

class LoginStore {
  constructor() {
    this.loggedIn = false;
    this.username = '';
    this.error = '';
    this.bindListeners({
      // handleLogin: LoginActions.LOGIN,
      handleLoginSuccess: LoginActions.LOGIN_SUCCESS,
      handleLoginFailure: LoginActions.LOGIN_FAILURE
    });

    this.exportAsync(LoginSource);
	}

  handleLogin() {
    this.loggedIn = false;
  }

	handleLoginSuccess(loggedIn) {
	   this.loggedIn = loggedIn;
	}

  handleLoginFailure(error) {
    this.error = error;
  }
}

export default alt.createStore(LoginStore, 'LoginStore');
