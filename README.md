yurkagon-redux
=========

A little bit retarded repo. Redux like library made just for fun :D

Usage
=========

Create reducer
---------

```javascript
const initialState = {
  title: 'initial text',
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
```

Combine multiply reducers into just one
---------

```javascript
import { combineReducers } from 'PATH/yurkagon-redux';

const rootReducer = combineReducers({
  app: yourReducer,
  //...and others
});
```

Create actions and action creators
---------
```javascript
const setTitle = title => ({
  type: 'SET_TITLE',
  payload: title,
});
// or
const setTitle = title => dispatch => dispatch({
  type: 'SET_TITLE',
  payload: title,
});
```

Create store
---------
```javascript
import { createStore } from 'PATH/yurkagon-redux';
import rootReducer from 'PATH/yourReducer';

const store = createStore(rootReducer);
```

dispatch(action)
---------
Works same as with `thunk`
```javascript
const setTitle1 = title => ({
  type: 'SET_TITLE',
  payload: title,
});
// another same one
const setTitle2 = title => dispatch => dispatch({
  type: 'SET_TITLE',
  payload: title,
});

store.dispatch(setTitle1('AWESOME TITLE'));
store.dispatch(setTitle2('ANOTHER AWESOME TITLE'));
```

subscribe('key', callback)
---------
For detecting changes in store
```javascript
const logger = (newState, prevState, action) => {
  console.group();
  console.log({ prevState });
  console.log({
    action: action.type,
    payload: action.payload,
  });
  console.log({ newState });
  console.groupEnd();
};

store.subscribe('logger', logger);
```

Connect to React
=========

Implement Provider
---------

```javascript
import React from 'react';
import { Provider } from 'PATH/yurkagon-react-redux';

const App = () => (
  <Provider store={store}>
    <YourPage />
  </Provider>
);
```

Connect any component to your store
---------

```javascript
import React, { Fragment } from 'react';
import { connect } from '../../yurkagon-react-redux';
import { bindActionCreators } from '../../yurkagon-redux';

const Title = props => (
  <Fragment>
    <h1>{props.title}</h1>
    <button
      onClick={() => props.setTitle('another title')}
    >
      SET ANOTTHER TITLE
    </button>
  </Fragment>
);

const mapStateToProps = state => ({
  title: state.app.title
});

// setTitle is your action creator you made before
const mapDispatchToProps = dispatch => ({
  setComponentTitle: bindActionCreators(setTitle, dispatch),
  // or
  setComponentTitle: title => dispatch(setTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
```
