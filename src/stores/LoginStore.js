import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';

class LoginStore {
  constructor() {
    this.loggedIn = false;
    this.username = '';
    this.errorMessage = undefined;
    this.bindListeners({
      handleVerify: LoginActions.VERIFY,
      loginPrepare: LoginActions.LOGIN_PREPARE,
      handleLoginSuccess: LoginActions.LOGIN_SUCCESS,
      handleLoginFailure: LoginActions.LOGIN_FAILURE
    });

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn,
      isInProgress: this.isInProgress,
      getErrorMessage: this.getErrorMessage
    });

    this.exportAsync(LoginSource);
	}

  loginPrepare(username) {
    this.username = username;
    this.errorMessage = undefined;
  }

  isLoggedIn() {
    return this.getState().loggedIn;
  }

  isInProgress() {
    return this.getState().inProgress;
  }

  getErrorMessage() {
    return this.getState().errorMessage;
  }

  handleVerify() {
  }

  handleLogin() {
    console.log('logging in');
  }

	handleLoginSuccess(loggedIn) {
    console.log('logged in');
	   this.loggedIn = loggedIn;
     this.inProgress = false;
	}

  handleLoginFailure(errorMessage) {
    this.errorMessage = errorMessage;
  }


}

export default alt.createStore(LoginStore, 'LoginStore');
