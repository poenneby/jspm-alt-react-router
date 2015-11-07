import React from 'react';
import AltContainer from 'alt/components/AltContainer';

import LoginStore from 'src/stores/LoginStore';

class AuthenticatorPage extends React.Component {
  render() {
    return (<AltContainer store={LoginStore}><Authenticator {...this.props} /></AltContainer>);
  }
}

class Authenticator extends React.Component {

  componentDidMount() {
    LoginStore.verify();
  }

  componentDidUpdate(oldState) {
    if (LoginStore.isLoggedIn()) {
      console.log('Logged in');
      oldState.history.pushState({}, oldState.location.state);
    } else {
      alert(this.props.errorMessage);
      oldState.history.pushState(oldState.location.state, "/login");
    }
  }



  render() {
    return null;
  }
}


function authenticate(nextState, replaceState) {
  if (!LoginStore.isLoggedIn()) {
    replaceState(nextState.location.pathname, '/authenticate');
  }
}

export { authenticate };
export { AuthenticatorPage };
