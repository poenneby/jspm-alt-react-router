import alt from '../alt';

class LoginActions {
  authenticate(status) {
    this.dispatch(status);
	}
}

export default alt.createActions(LoginActions);
