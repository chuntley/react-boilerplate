import React from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class About extends React.Component {
  render() {
    return (
      <Query query={gql`
        query Counter {
          count @client
        }
      `}>
        {({ data }) => (
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
                  <p>Current Count: {data.count}</p>
                </>
              </section>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}
