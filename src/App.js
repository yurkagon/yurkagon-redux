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
          <button onClick={() => this.props.setName('hello world')}> set name as Hello World</button>
          <button onClick={() => this.props.getPosts()}> getPosts</button>
        </header>
        {this.props.posts.length && this.props.posts.map((el, index) => <p key={index}>{el.title}</p>)}
      </div>
    );
  }
}

const setName = name => ({
  type: 'SET_NAME',
  payload: name
});
const setPosts = posts => ({
  type: 'SET_POSTS',
  payload: posts,
});
const getPosts = () => async dispatch => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  dispatch(setPosts(posts));
}

const mapStateToProps = state => ({
  name: state.profile.name,
  posts: state.data.posts
});
const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
