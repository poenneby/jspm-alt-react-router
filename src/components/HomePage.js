import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div><h1>A protected page!</h1><p><Link to="/about">About</Link></p></div>);
  }
}
