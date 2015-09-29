console.log('Hello');

import React from 'react';
import {Router, Route} from 'react-router';

class Hello extends React.Component {
  render() {
    return (<div><h1>Hello!</h1></div>);
  }
}


React.render(<Router>
  <Route path="/" component={Hello} />
</Router>, document.getElementById('app'));
