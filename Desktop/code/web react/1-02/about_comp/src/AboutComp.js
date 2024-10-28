import React, { Component } from 'react';
import GreenComp from './GreenComp';
import ImgComp1 from './ImgComp1';
import ImgComp2 from './ImgComp2';
import OrangeComp from './OrangeComp';
import GrayComp from './GrayComp';

class AboutComp extends Component {
  render() {
    let content = null;
    let { type, title, desc } = this.props;

    if (type === "green") {
      content = <GreenComp />;
    }
    else if (type === "orange") {
      content = <OrangeComp title={title} desc={desc} />;
    }
    else if (type === "gray") {
      content = <GrayComp title={title} desc={desc} />;
    }
    else if (type === "img1") {
      content = <ImgComp1 />;
    }
    else if (type === "img2") {
      content = <ImgComp2 />;
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default AboutComp;