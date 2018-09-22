import React from 'react';
import Header from './../../components/Header';
import ColorSelector from './../../components/ColorSelector';
import TitleSelector from './../../components/TitleSelector';
import PostList from './../../components/PostList';

import './style.css';

const App = () => (
  <div className="App">
    <Header />
    <ColorSelector />
    <TitleSelector />
    <PostList />
  </div>
);

export default App;
