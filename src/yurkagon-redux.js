import React from 'react';

class Store {
  constructor(reducer = () => ({}), initialState = {}) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscriptions ={};
    this.state = this.reduce();
    this.refs = [];

    this.connect = this.connect.bind(this);
    this.dispatch = this.dispatch.bind(this);
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
      const newState = this.reduce(action);
      Object.keys(this.subscriptions).forEach(el => this.subscriptions[el](newState, this.state, action));
      this.state = newState;
      this.refs.forEach(el => {
        const { component, mapStateToProps } = el;
        const state = mapStateToProps(this.state);
        component.setState(state);
      });
    } else if (typeof action === 'function') {
      action(this.dispatch);
    }
  }
  connect(mapStateToProps = ()=>({}), mapDispatchToProps = ()=>({})) {
    return (Component) => {
      const state = mapStateToProps(this.state);
      const actions = mapDispatchToProps(this.dispatch);
      class Container extends React.Component {
        constructor(props) {
          super(props);
          this.state = state;
        }
        render() {
          return <Component {...this.props} {...this.state} {...actions} />;
        }
      }
      return (props) => (
        <Container
          {...props}
          ref={component => {
            if (component) {
              this.refs.push({
                component,
                mapStateToProps,
              });
            }
          }}
        />)
    };
  }
}

export const createStore = (reducer, state) => new Store(reducer, state);

export const combineReducers = reducers => (state = {}, action = {}) => {
  const newState = {};
  Object.keys(reducers).forEach(el => {
    newState[el] = reducers[el](state[el], action);
  });
  return newState;
};
