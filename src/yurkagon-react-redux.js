import React, { createContext, Component } from 'react';

const Context = createContext('yurkagon-react-redux');

export class Provider extends Component {
  constructor(props) {
    super(props);
    const { store: { subscribe } } = props;
    subscribe('yurkagon-react-redux', () => this.forceUpdate());
  }
  render() {
    const { store: { dispatch, getState }, children } = this.props;
    const state = getState();

    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    )
  }
}

export const connect = (mapStateToProps = ()=>({}), mapDispatchToProps = ()=>({})) => Component => props => (
  <Context.Consumer>
    {({ state, dispatch }) => (
      <Component {...props} {...mapStateToProps(state)} {...mapDispatchToProps(dispatch)} />
    )}
  </Context.Consumer>
);

/* Old versian made by connect via subscribe
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
const connect = connectToReact(store);
*/
