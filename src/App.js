import React, { Component } from 'react';
import './App.css';
import { connect } from './store';
import { setName, getPosts } from './actions';

import Header from './compoments/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.posts.length && this.props.posts.map((el, index) => <p key={index}>{el.title}</p>)}
        <button onClick={() => this.props.setName('Yuragon')}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.data.posts
});
const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
