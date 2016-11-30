import React, { Component } from 'react';

import Textbox from '../Form/Textbox';
import Textarea from '../Form/Textarea';
import Button from '../Form/Button';

class Enquire extends Component {
  render() {
    return (
        <div>
            <div>Name: <Textbox /></div>
            <div>Email: <Textbox /></div>
            <div>Message: <Textarea /></div>
            <div><Button value="Send Now" /></div>
        </div>
    );
  }
}

export default Enquire;
