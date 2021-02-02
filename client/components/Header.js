import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router-dom';
import mutation from '../mutations/logout';

class Header extends Component {

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderAuthOptions() {
    return(
      <div>
        <li>
          <Link to="/signup"> Signup </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </div>
    );
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if(loading) {
      return(<div />)
    }
    return(
      <div>
        { user ? 
          <li>
            <a onClick={this.onLogoutClick.bind(this)}> 
            Logout 
            </a>
          </li> 
          : 
          this.renderAuthOptions() }
      </div>
    );
  }
  
  render() {
    return (
        <nav>
          <div className="nav-wrapper" style={{"backgroundColor": "darkcyan"}}>
            <Link to="/" className="brand-logo left">
              Home
            </Link>
            <ul className="right">
              {this.renderButtons()};
            </ul>
          </div>
        </nav>
    );
  };

}

export default graphql(mutation)(
  graphql(query)(Header)
);
