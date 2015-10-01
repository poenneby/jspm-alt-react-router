import alt from '../alt';

class LoginActions {
  loginPrepare(username) {
    this.dispatch(username);
	}

  login() {
    this.dispatch();
  }

  verify() {
    this.dispatch();
	}

  loginSuccess(status) {
    this.dispatch(status);
	}

  loginFailure(error) {
    this.dispatch(error);
	}
}

export default alt.createActions(LoginActions);
