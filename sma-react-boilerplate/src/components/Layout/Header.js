import React, { Component } from 'react';


import Navlink from '../Common/Navlink';



class Header extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
            <li><Navlink to="/">Home</Navlink></li>
            <li><Navlink to="/about">About</Navlink>
                <li><Navlink to="/about/company">company</Navlink></li>
                <li><Navlink to="/about/resources">resources</Navlink></li>

            </li>

            <li><Navlink to="/contact">contact</Navlink></li>
        </ul>
        <hr />
      </div>

    );
  }
}

export default Header;
