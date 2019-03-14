import React, { Component } from 'react';
import '../styles/projects.css';

class Label extends Component {
  render() {
    return (
      <div className="label">
            {this.props.text}
      </div>
    );
  }
}

export default Label;
