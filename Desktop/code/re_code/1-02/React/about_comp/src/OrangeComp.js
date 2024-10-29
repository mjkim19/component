import React, { Component } from 'react';
import './OrangeComp.css';

class OrangeComp extends Component {
  render() {
    const { title, desc } = this.props;

    return (
      <div className="orange-comp">
        {title && <span className="title">{title}<br /><br /></span>}
        {desc && <span className="desc">{desc}</span>}
      </div>
    );
  }
}

export default OrangeComp;