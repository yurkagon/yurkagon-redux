import React, { Fragment } from 'react';
import { connect } from '../../yurkagon-react-redux';
import { bindActionCreators } from '../../yurkagon-redux';
import colors from './colors';
import './style.css';

import { setColor } from '../../actions/app';

const ColorSelector = ({ setBackground, currentColor }) => (
  <Fragment>
    <h3>Select background color</h3>
    <div className="color-selector">
      {colors.map((color, index) => (
        <div
          className={`color-item ${color === currentColor ? 'selected' : ''}`}
          key={`${color}-${index}`}
          style={{backgroundColor: color}}
          onClick={() => setBackground(color)}
        />
      ))}
    </div>
  </Fragment>
);

const mapStateToProps = ({ app: { color: currentColor }}) => ({ currentColor });

const mapDispatchToProps = dispatch => ({
  setBackground: bindActionCreators(setColor, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);
