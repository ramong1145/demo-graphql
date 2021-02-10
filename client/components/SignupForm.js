import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/signup';
import query from '../queries/currentUser';
import { createBrowserHistory } from '../utils/history'

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: []};
  }

  onSubmit( {email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch( res => {
      const errors = res.grapQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  componentDidUpdate(newProp) {
    if(!this.props?.data?.user && newProp?.data?.user) {
      createBrowserHistory.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <h3> Sign Up </h3>
        <AuthForm 
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)} 
        />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(SignupForm)
);