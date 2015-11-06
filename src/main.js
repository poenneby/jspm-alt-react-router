import React, {findDOMNode} from 'react';
import {Router, Route, RouteHandler, Link, IndexRoute} from 'react-router';

import AltContainer from 'alt/components/AltContainer';

import LoginStore from './stores/LoginStore';
import LoginActions from './actions/LoginActions';

class HomePage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div><h1>A protected page!</h1><p><Link to="/about">About</Link></p></div>);
  }
}

class AboutPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div><h1>Another protected page!</h1><p><Link to="/">Home</Link></p></div>);
  }
}

class LoginPage extends React.Component {
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

React.render(
  <Router>
    <Route path="/" component={HomePage} onEnter={authenticate} />
    <Route path="/about" component={AboutPage} onEnter={authenticate} />
    <Route path="/login" component={LoginPage} />
    <Route path="/authenticate" component={AuthenticatorPage} />
  </Router>,
  document.getElementById('app'));
