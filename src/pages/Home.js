import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary';
import TestError from '../components/TestError';
import { addInitialLoad } from '../redux/actions/sample';

export class Home extends React.Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    return (
      <section>
        <h1 className="title">Welcome!</h1>
        <Link to="/about">Go to about</Link>

        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>

        <style jsx>{`
          .title {
            color: red;
          }
        `}</style>
      </section>
    );
  }
}

export default connect(
  null,
  { addInitialLoad },
)(Home);
