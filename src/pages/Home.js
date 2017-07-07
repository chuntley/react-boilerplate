import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addInitialLoad } from '../actions/sample';

export class Home extends React.Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    return (
      <section>
        <h1>Welcome!</h1>
        <Link to="/about">Go to about</Link>
      </section>
    );
  }
}

export default connect(
  null,
  { addInitialLoad },
)(Home);
