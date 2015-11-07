import React from 'react';
import {Link} from 'react-router';

export default class AboutPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div><h1>Another protected page!</h1><p><Link to="/">Home</Link></p></div>);
  }
}
