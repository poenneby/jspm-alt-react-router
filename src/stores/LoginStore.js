import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
  constructor() {
    this.loggedIn = false;
    this.username = '';
    this.bindListeners({
      handleAuthentication: LoginActions.AUTHENTICATE
    });
	}

	handleAuthentication(loggedIn) {
	   this.loggedIn = loggedIn;
	}
}

export default alt.createStore(LoginStore, 'LoginStore');
