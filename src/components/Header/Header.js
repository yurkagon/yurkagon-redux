import React from 'react';
import { connect } from '../../yurkagon-react-redux';
import logo from '../../static/svg/logo.svg';
import './style.css';

const Header = ({ color, name }) => (
  <header className="App-header" style={{backgroundColor: color}}>
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{name}</h1>
  </header>
);

const mapStateToProps = state => ({
  name: state.app.title,
  color: state.app.color,
});

export default connect(mapStateToProps)(Header);
