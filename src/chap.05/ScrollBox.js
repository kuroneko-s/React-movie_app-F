import React, { Component } from "react";
import "./scroll.css";

class ScrollBox extends Component {
  scrollToBottom = () => {
    console.log(this.box);
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  // ref를 다는방법

  render() {
    return (
      <div
        className="outerbox"
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div className="innerbox" />
      </div>
    );
  }
}

export default ScrollBox;
