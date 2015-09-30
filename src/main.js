console.log('Hello');

import React from 'react';
import {Router, Route} from 'react-router';

import {UserStore} from 'src/stores/UserStore';
import {UserActions} from 'src/actions/UserActions';

class Hello extends React.Component {


  render() {
    return (<div><h1>Hello!</h1></div>);
  }
}

function hello() {
  if (UserStore.state.loggedIn) {
    alert('hello');
  }
}

React.render(<Router>
  <Route path="/" component={Hello} onEnter={hello} />
</Router>, document.getElementById('app'));
