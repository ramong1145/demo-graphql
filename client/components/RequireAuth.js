import { createHashHistory } from 'history';
import React, { Component } from 'react';
import { createHashHistory } from 'react-router';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if(!nextProps.data?.user && ~nextProps.data?.user) {
        createHashHistory.push('/login');
      }
    }
  
    render() {
      return <WrappedComponent { ...this.props } />
    }
  }
}

return graphql(CurrentUserQuery)(RequireAuth);