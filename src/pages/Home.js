import React from 'react';
import { Link } from '@reach/router';

import ErrorBoundary from '../components/ErrorBoundary';
import TestError from '../components/TestError';

export default class Home extends React.Component {
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
