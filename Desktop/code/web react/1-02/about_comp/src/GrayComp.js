import React, { Component } from 'react';
import './GrayComp.css';

class GrayComp extends Component {
  render() {
    const { title, desc } = this.props;

    return (
      <div className="gray-comp">
        {title && <span className="title">{title}<br /><br /></span>}
        {desc && <span className="desc">{desc}</span>}
      </div>
    );
  }
}

export default GrayComp;