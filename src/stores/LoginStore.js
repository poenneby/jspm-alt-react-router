import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';

class LoginStore {
  constructor() {
    this.loggedIn = false;
    this.username = '';
    this.error = '';
    this.bindListeners({
      handleVerify: LoginActions.VERIFY,
      handleLogin: LoginActions.LOGIN,
      handleLoginSuccess: LoginActions.LOGIN_SUCCESS,
      handleLoginFailure: LoginActions.LOGIN_FAILURE
    });

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn
    });

    this.exportAsync(LoginSource);
	}

  isLoggedIn() {
    return this.getState().loggedIn;
  }

  handleVerify() {
  }

  handleLogin() {
    console.log('logging in');
  }

	handleLoginSuccess(loggedIn) {
    console.log('logged in');
	   this.loggedIn = loggedIn;
	}

  handleLoginFailure(error) {
    this.error = error;
  }


}

export default alt.createStore(LoginStore, 'LoginStore');
