import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.loggedIn = false;
    this.username = '';
    this.bindListeners({
      handleAuthentication: UserActions.AUTHENTICATE
    });
	}

	handleAuthentication(loggedIn) {
	   this.loggedIn = loggedIn;
	}
}

export default alt.createStore(UserStore, 'UserStore');
