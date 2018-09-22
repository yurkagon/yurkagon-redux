import React from 'react';
import { connect } from './../../yurkagon-react-redux';
import { bindActionCreators } from './../../yurkagon-redux';
import Header from './../../components/Header';
import ColorSelector from './../../components/ColorSelector';

import { setTitle } from './../../actions/app';
import { getPosts } from './../../actions/data';

import './style.css';

const App = ({ posts, getPosts, setTitle }) => (
  <div className="App">
    <Header />
    <ColorSelector />
    <button onClick={getPosts}>Load posts</button>
    <button onClick={() => setTitle('Yuragon')}/>
    {posts.length && posts.map((el, index) => (
      <p key={index}>{el.title}</p>
    ))}
  </div>
);

const mapStateToProps = state => ({
  posts: state.data.posts,
});
const mapDispatchToProps = dispatch => ({
  setTitle: name => dispatch(setTitle(name)), // without bind action createors
  getPosts: bindActionCreators(getPosts, dispatch), // with bind action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
