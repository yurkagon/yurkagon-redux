import React from 'react';

class Store {
  constructor(reducer = () => ({}), initialState = {}) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscriptions = {};
    this.state = this.reduce();

    this.dispatch = this.dispatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(key, callback) {
    this.subscriptions[key] = callback;
  }
  get value() {
  	return this.state;
  }
  reduce(action) {
    return this.reducer(this.state, action);
  }
  dispatch(action) {
    if (typeof action === 'object') {
      const oldState = this.state;
      const newState = this.reduce(action);
      Object.keys(this.subscriptions).forEach(el => this.subscriptions[el](newState, oldState, action));
      this.state = newState;
    } else if (typeof action === 'function') {
      action(this.dispatch);
    }
  }
}

export const connectToReact = store => {
  return (mapStateToProps = ()=>({}), mapDispatchToProps = ()=>({})) => (function(Component) {
    const state = mapStateToProps(this.state);
    const actions = mapDispatchToProps(this.dispatch);
    const subscribe = this.subscribe;

    if (this.subCount === undefined) this.subCount = 0;
    const currentCount = this.subCount;
    this.subCount += 1;

    class Container extends React.Component {
      constructor(props) {
        super(props);
        this.state = state;
        subscribe('connect' + currentCount, (newState) => {
          this._isMounted && this.setState(mapStateToProps(newState));
        });
      }
      componentWillMount() {
        this.setState(mapStateToProps(store.value));
        this._isMounted = true;
      }
      componentWillUnmount() {
        this._isMounted = false;
      }
      render() {
        return <Component {...this.props} {...this.state} {...actions} />;
      }
    }
    return (props) => <Container {...props} />;
  }).bind(store);
};

export const createStore = (reducer, state) => new Store(reducer, state);
export const combineReducers = reducers => (state = {}, action = {}) => {
  const newState = {};
  Object.keys(reducers).forEach(el => {
    newState[el] = reducers[el](state[el], action);
  });
  return newState;
};
