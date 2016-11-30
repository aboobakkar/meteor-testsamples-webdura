import React, { Component } from 'react';

class AboutType extends Component {
  render() {
    return (
        <div>

          <div >&nbsp;&nbsp;&nbsp;{this.props.params.type}</div>

        </div>
    );
  }
}

export default AboutType;
