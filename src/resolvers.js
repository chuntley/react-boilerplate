import gql from 'graphql-tag';

const resolvers = {
  Mutation: {
    incrementOne: (_, variables, { cache }) => {
      const query = gql`
        query Counter {
          count @client
        }
      `;
      const { count } = cache.readQuery({ query });
      const data = { count: count + 1 };
      cache.writeData({ data });
      return null;
    },
  },
};

export default resolvers;
