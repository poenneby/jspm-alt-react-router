import alt from '../alt';

class UserActions {
  authenticate(status) {
    this.dispatch(status);
	}
}

module.exports = alt.createActions(UserActions);
