import React, { Component } from 'react';
import { Link } from 'react-router'


class Navlink extends Component {
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}

export default Navlink;
