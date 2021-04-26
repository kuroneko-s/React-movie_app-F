import React, { Component } from "react";
import "./sample.css";

class SampleClass extends Component {
  state = {
    password: "",
    check: false,
  };

  input = React.createRef();

  onChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  onClickHandler = () => {
    this.setState({ check: this.state.password === "0000" });
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.input}
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          className={this.state.check ? "success" : "faile"}
        />
        <button onClick={this.onClickHandler}>검증</button>
      </div>
    );
  }
}

export default SampleClass;
