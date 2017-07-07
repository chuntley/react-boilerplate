import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from '../actions/sample';

export class About extends React.Component {
  render() {
    return (
      <section>
        <h1>About Page</h1>
        <button onClick={() => this.props.incrementCounter()}>Increment</button>
        <p>Current Count: {this.props.sample.counter}</p>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  sample: state.sample,
});

export default connect(
  mapStateToProps,
  { incrementCounter },
)(About);
