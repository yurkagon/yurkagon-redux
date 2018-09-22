import React from 'react';
import { connect } from './../../yurkagon-react-redux';
import Header from './../../components/Header';
import ColorSelector from './../../components/ColorSelector';

import { setTitle } from './../../actions/app';
import { getPosts } from './../../actions/data';

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
  setTitle: name => dispatch(setTitle(name)),
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
