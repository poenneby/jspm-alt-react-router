import alt from '../alt';

class UserActions {
  authenticate(status) {
    this.dispatch(status);
	}
}

export default alt.createActions(UserActions);
