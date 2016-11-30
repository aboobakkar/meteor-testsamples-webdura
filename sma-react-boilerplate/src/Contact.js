import React, { Component } from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Enquire from './components/Contact/Enquire';

class Contact extends Component {
  render() {
    return (
        <div>
          <Header />
          <div >
            Contact page <br />
            <Enquire />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Contact;
