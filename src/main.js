import React, {findDOMNode} from 'react';
import {Router, Route} from 'react-router';

import AltContainer from 'alt/components/AltContainer';

import { AuthenticatorPage, authenticate } from './components/AuthenticatorPage';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';

React.render(
  <Router>
    <Route path="/" component={HomePage} onEnter={authenticate} />
    <Route path="/about" component={AboutPage} onEnter={authenticate} />
    <Route path="/login" component={LoginPage} />
    <Route path="/authenticate" component={AuthenticatorPage} />
  </Router>,
  document.getElementById('app'));
