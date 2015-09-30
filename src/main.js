import React from 'react';
import {Router, Route, RouteHandler, Link, IndexRoute} from 'react-router';

import LoginStore from './stores/LoginStore';

class Home extends React.Component {

  constructor() {
    super();
    console.log(LoginStore.state.loggedIn);
  }


  render() {
    return (<div><h1>Hello!</h1></div>);
  }
}

class LoginPage extends React.Component {
  render() {
    return (
      <AltContainer store={UsersStore}>
        <Login {...this.props} />
      </AltContainer>)
  }
}

class Login extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    LoginStore.listen(this.onChange);
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

function authenticate(nextState, replaceState) {
  if (LoginStore.state.loggedIn) {
    alert('hello');
  } else {
    replaceState(nextState.location.pathname, '/login');
  }
}

React.render(
  <Router>
    <Route path="/" component={Home} onEnter={authenticate} />
    <Route path="/login" component={LoginPage} />
  </Router>,
  document.getElementById('app'));
