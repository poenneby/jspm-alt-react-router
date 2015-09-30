import React from 'react';
import {Router, Route, RouteHandler, Link, IndexRoute} from 'react-router';

import UserStore from './stores/UserStore';

class Home extends React.Component {

  constructor() {
    super();
    console.log(UserStore.state.loggedIn);
  }


  render() {
    return (<div><h1>Hello!</h1></div>);
  }
}

class Login extends React.Component {

  username(e) {
    UserStore.state.username = e.target.value;
  }

  render() {
    return (<div><form><input type="text" onChange={this.username.bind(this)} /><input type="submit" value="Login" /></form></div>);
  }
}

function authenticate(nextState, replaceState) {
  if (UserStore.state.loggedIn) {
    alert('hello');
  } else {
    replaceState({}, '/login');
  }
}

React.render(
  <Router>
    <Route path="/" component={Home} onEnter={authenticate} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById('app'));
