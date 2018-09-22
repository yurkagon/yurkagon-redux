import React from 'react';

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