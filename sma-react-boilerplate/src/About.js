import React, { Component } from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

class About extends Component {
  render() {
    return (
        <div>
          <Header />
          <div >
            About page
          </div>
          <div>{this.props.children}</div>
          <Footer />
        </div>
    );
  }
}

export default About;
