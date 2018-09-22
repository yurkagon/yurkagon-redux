import React from 'react';
import './App.css';
import { connect } from './yurkagon-react-redux';
import { setName, getPosts } from './actions';

import Header from './compoments/Header';

const App = ({ posts, getPosts, setName }) => (
  <div className="App">
    <Header info="111" />
    <button onClick={getPosts}>Load posts</button>
    <button onClick={() => setName('Yuragon')}/>
    {posts.length && posts.map((el, index) => (
      <p key={index}>{el.title}</p>
    ))}
  </div>
);

const mapStateToProps = state => ({
  posts: state.data.posts,
});
const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
