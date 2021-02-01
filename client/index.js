import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import history from './utils/history';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://localhost:4000/graphql` }), 
  connectToDevTools: true
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Route path={"/"} component={App}>

        </Route>
      </Router>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
