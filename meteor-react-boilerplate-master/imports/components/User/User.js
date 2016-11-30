import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// Task component - represents a single todo item
export default class User extends Component {
  render() {
    return (
      <li><Link to={`/user/${this.props.user._id}`}>{this.props.user.name}</Link></li>
    );
  }
}

User.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  user: PropTypes.object.isRequired,
};
