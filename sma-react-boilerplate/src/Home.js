import React, { Component } from 'react';
import { render } from 'react-dom'

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';


class Home extends Component {
  render() {
    return (
    <div>
      <Header />
      <div >
        Home page
      </div>
      <Footer />
    </div>
    );
  }
}

export default Home;
