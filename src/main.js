import React from 'react';
import {Router, Route, RouteHandler, Link, IndexRoute} from 'react-router';

import AltContainer from 'alt/components/AltContainer';

import LoginStore from './stores/LoginStore';

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

  componentDidMount() {
    LoginStore.state.username = '';
  }

  componentDidUpdate(oldState) {
    if (LoginStore.state.loggedIn) {
      console.log('Logged in');
      oldState.history.pushState({}, oldState.location.state);
    } else {
      alert(LoginStore.state.error);
    }
  }

  username(e) {
    LoginStore.state.username = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    LoginStore.login();
  }

  render() {
    return (<div><form onSubmit={this.handleSubmit.bind(this)}><input type="text" onChange={this.username.bind(this)} /><input type="submit" value="Login" /></form></div>);
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
    if (LoginStore.state.loggedIn) {
      console.log('Logged in');
      oldState.history.pushState({}, oldState.location.state);
    } else {
      alert(LoginStore.state.error);
      oldState.history.pushState(oldState.location.state, "/login");
    }
  }



  render() {
    return null;
  }
}


function authenticate(nextState, replaceState) {
  if (!LoginStore.state.loggedIn) {
    replaceState(nextState.location.pathname, '/authenticate');
  }
  LoginStore.state.loggedIn = false;
}

React.render(
  <Router>
    <Route path="/" component={HomePage} onEnter={authenticate} />
    <Route path="/about" component={AboutPage} onEnter={authenticate} />
    <Route path="/login" component={LoginPage} />
    <Route path="/authenticate" component={AuthenticatorPage} />
  </Router>,
  document.getElementById('app'));
