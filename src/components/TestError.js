import React from 'react';

export default class TestError extends React.Component {
  render() {
    // Uncomment the line below to test the error boundary
    // throw new Error();

    return (
      <div>
        <p>Looks good</p>
      </div>
    );
  }
}
