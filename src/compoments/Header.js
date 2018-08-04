import React from 'react';
import { connect } from '../store';
import logo from '../logo.svg';

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{props.name}</h1>
  </header>
);

const mapStateToProps = state => ({
  name: state.profile.name,
});

export default connect(mapStateToProps)(Header);
