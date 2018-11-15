import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import CurrentCount from '../components/CurrentCount';

export default class About extends React.Component {
  render() {
    return (
      <Mutation mutation={gql`
        mutation IncrementOne {
          incrementOne @client
        }
      `}>
        {incrementOne => (
          <section>
            <>
              <h1>About Page</h1>
              <button onClick={incrementOne}>Increment</button>
              <CurrentCount />
            </>
          </section>
        )}
      </Mutation>
    );
  }
}
