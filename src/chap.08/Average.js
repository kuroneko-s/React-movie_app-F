import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 추이');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber('');
    inputEl.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
