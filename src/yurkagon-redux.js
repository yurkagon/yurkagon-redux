import React from 'react';

class Store {
  constructor(reducer = () => ({}), initialState) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscriptions ={};
    this.state = this.reduce();

    this.connect = this.connect.bind(this);
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
    const newState = this.reduce(action);
    this.state = newState;
    Object.keys(this.subscriptions).forEach(el => this.subscriptions[el](this.state));

    //if(this.provider) this.provider.forceUpdate();
    if(this.ref) this.ref.forceUpdate();
    console.log(this.state)
  }
  setProvider(provider) {
    this.provider = provider;
  }
  connect(mapStateToProps, Comp) {
    const state = mapStateToProps(this.state);
    const RefCont = class extends React.Component {
      render() {
        return (<Comp {...this.props} {...state}/>);
      }
    };
    return props => <RefCont {...props} ref={(ref) => this.ref = ref}/>
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

export class Provider extends React.Component {
  render() {
    console.log('render provider')
    return <div>{this.props.children}</div>;
  }
}

