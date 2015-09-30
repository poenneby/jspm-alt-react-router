import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.loggedIn = false;
    this.bindListeners({
      handleAuthentication: UserActions.AUTHENTICATE
    });
	}

	handleAuthentication(loggedIn) {
	   this.loggedIn = loggedIn;
	}
}

module.exports = alt.createStore(UserStore, 'UserStore');
