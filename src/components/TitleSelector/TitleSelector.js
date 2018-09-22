import React, { Fragment } from 'react';
import { connect } from '../../yurkagon-react-redux';
import { bindActionCreators } from '../../yurkagon-redux';
import titles from './titles';
import './style.css';

import { setTitle } from '../../actions/app';

const ColorSelector = ({ setText, currentTitle }) => (
  <Fragment>
    <h3>Select title</h3>
    <div className="title-selector">
      {titles.map((title, index) => (
        <div
          className={`title-item ${title === currentTitle ? 'selected' : ''}`}
          key={`${title}-${index}`}
          onClick={() => setText(title)}
        >
          {title}
        </div>
      ))}
    </div>
  </Fragment>
);

const mapStateToProps = ({ app: { title: currentTitle }}) => ({ currentTitle });

const mapDispatchToProps = dispatch => ({
  setText: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
