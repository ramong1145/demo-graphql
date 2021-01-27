import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://localhost:4000/graphql` })
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
