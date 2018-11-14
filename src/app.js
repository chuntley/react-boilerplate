import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import LayoutContainer from './components/LayoutContainer';
import resolvers from './resolvers';

const cache = new InMemoryCache();
const httpLink = new HttpLink();
const stateLink = withClientState({
  cache,
  defaults: {
    count: 0,
  },
  resolvers,
});

const link = ApolloLink.from([stateLink, httpLink]);
const client = new ApolloClient({
  link,
  cache,
});

render(
  <ApolloProvider client={client}>
    <LayoutContainer />
  </ApolloProvider>,
  document.getElementById('app'),
);

if (module.hot) module.hot.accept();
