import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store, { connect } from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
          <button onClick={() => this.props.setName('hello world')}/>
        </header>
      </div>
    );
  }
}

const setName = name => ({
  type: 'SET_NAME',
  payload: name
});

const mapStateToProps = state => ({
  name: state.profile.name,
});
const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
