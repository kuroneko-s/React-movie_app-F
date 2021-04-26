import React, { useState } from "react";

const IterationSample = () => {
  const [arr, setArr] = useState(["땅", "불", "바람", "전기"]);
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  const onClickHandler = () => {
    const newArr = arr.concat(value);
    setArr(newArr);
    setValue("");
  };
  const onDeleteHandler = (id) => {
    const newArr = arr.filter((v) => arr.indexOf(v) !== id);
    setArr(newArr);
  };

  return (
    <div>
      <input name="value" value={value} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>추가</button>
      <hr />

      {arr.map((v) => (
        <li
          key={arr.indexOf(v)}
          onClick={() => onDeleteHandler(arr.indexOf(v))}
          value={v}
        >
          {v}
        </li>
      ))}
    </div>
  );
};

export default IterationSample;
