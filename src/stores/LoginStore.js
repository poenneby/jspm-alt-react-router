import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';

class LoginStore {
  constructor() {
    this.loggedIn = false;
    this.errorMessage = undefined;
    this.bindListeners({
      handleVerify: LoginActions.VERIFY,
      handleLoginSuccess: LoginActions.LOGIN_SUCCESS,
      handleLoginFailure: LoginActions.LOGIN_FAILURE
    });

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn,
      getErrorMessage: this.getErrorMessage
    });

    this.exportAsync(LoginSource);
	}

  isLoggedIn() {
    return this.getState().loggedIn;
  }

  getErrorMessage() {
    return this.getState().errorMessage;
  }

  handleVerify() {
  }

	handleLoginSuccess(loggedIn) {
    console.log('logged in');
	   this.loggedIn = loggedIn;
	}

  handleLoginFailure(errorMessage) {
    this.errorMessage = errorMessage;
  }


}

export default alt.createStore(LoginStore, 'LoginStore');
