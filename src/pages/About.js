import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from '../redux/actions/sample';

export class About extends React.Component {
  render() {
    return (
      <section>
        <h1>About Page</h1>
        <button onClick={() => this.props.incrementCounter()}>Increment</button>
        <p>Current Count: {this.props.counter}</p>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  counter: state.sample.counter,
});

export default connect(
  mapStateToProps,
  { incrementCounter },
)(About);
