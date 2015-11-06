import alt from '../alt';

class LoginActions {

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
