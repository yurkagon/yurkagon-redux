class Store {
  constructor(reducer = () => ({}), initialState = {}) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscriptions = {};
    this.state = this.reduce();

    this.dispatch = this.dispatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.getState = this.getState.bind(this);
  }
  subscribe(key, callback) {
    this.subscriptions[key] = callback;
  }
  get value() {
  	return this.state;
  }
  getState() {
    return this.state;
  }
  reduce(action) {
    return this.reducer(this.state, action);
  }
  dispatch(action) {
    if (typeof action === 'object') {
      const oldState = this.state;
      const newState = this.reduce(action);
      this.state = newState;
      Object.keys(this.subscriptions).forEach(el => (
        this.subscriptions[el](newState, oldState, action))
      );
    } else if (typeof action === 'function') {
      action(this.dispatch);
    }
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
