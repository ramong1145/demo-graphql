import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Router, Route, Switch } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import history from './utils/history';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import RequireAuth from './components/RequireAuth';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://localhost:4000/graphql` }), 
  connectToDevTools: true
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignupForm} /> 
              <Route exact path="/dashboard" component={RequireAuth(Dashboard)} /> 
            </Switch>
          </div>
        </Router>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
