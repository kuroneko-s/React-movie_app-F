import React, { useState } from "react";
import "./sample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onClickHandler = (e) => {
    password === "0000" ? setChecked(true) : setChecked(false);
  };

  return (
    <div>
      <h1>Hello</h1>
      <input
        className={checked ? "success" : "faile"}
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>검증</button>
    </div>
  );
};

export default ValidationSample;
