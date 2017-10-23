import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addOne } from '../actions';

import { Button } from './';

class UnconnectedComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props.myCounter);
  }

  render() {
    addOne();
    return (
      <div>
        <h1>Hello from the component with Redux</h1>
        <div>
          <h3>hello</h3>
          Stuff: {this.props.myCounter}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    myCounter: state.myCounter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
};

console.log(UnconnectedComponent);

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedComponent);

export { ConnectedComponent };
