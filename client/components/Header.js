import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if(loading) {
      return(<div />)
    }
    return(
      <div>
        { user ? `Logout` : `You're not logged in` }
      </div>
    );
  }
  
  render() {
    return (
        <nav>
          <div className="nav-wrapper">
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

export default graphql(query)(Header);
