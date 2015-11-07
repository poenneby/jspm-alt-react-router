import React, {findDOMNode} from 'react';
import AltContainer from 'alt/components/AltContainer';

import LoginStore from 'src/stores/LoginStore';

export default class LoginPage extends React.Component {
  render() {
    return (
      <AltContainer store={LoginStore}>
        <Login {...this.props} />
      </AltContainer>)
  }
}

class Login extends React.Component {

  constructor() {
    super();
  }

  componentDidUpdate(oldState) {
    if (LoginStore.isLoggedIn()) {
      // Logged in - redirect to originally requested path
      oldState.history.pushState({}, oldState.location.state);
    } else if (this.props.errorMessage) {
      // There was a problem during the login request
      console.log(this.props.errorMessage);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = findDOMNode(this.refs.username).value
    LoginStore.login(username);
  }

  render() {
    return (<div><form onSubmit={this.handleSubmit.bind(this)}><input ref="username" type="text" /><input type="submit" value="Login" /></form></div>);
  }
}
