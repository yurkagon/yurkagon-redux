import React, { Fragment } from 'react';
import { connect } from '../../yurkagon-react-redux';
import { bindActionCreators } from '../../yurkagon-redux';
import './style.css';

import { getPosts } from '../../actions/data';

const ColorSelector = ({ posts, loadPosts }) => (
  <Fragment>
    <h3>Test AJAX</h3>
    <button onClick={loadPosts}>Load posts</button>
    <div className="posts">
      {!!posts.length && posts.map((el, index) => (
        <div
          className="item"
          key={`${index}-ajax`}
        >
          {el.title}
        </div>
      ))}
    </div>
  </Fragment>
);

const mapStateToProps = ({ data: { posts } }) => ({ posts });

const mapDispatchToProps = dispatch => ({
  loadPosts: bindActionCreators(getPosts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
