import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class CurrentCount extends React.Component {
  render() {
    return (
      <Query query={gql`
        query Counter {
          count @client
        }
      `}>
        {({ data }) => (
          <p>Current Count: {data.count}</p>
        )}
      </Query>
    );
  }
}
