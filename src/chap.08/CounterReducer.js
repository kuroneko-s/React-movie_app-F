import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'IN':
      return { value: state.value + 1 };
    case 'DE':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p> {state.value} </p>

      <button onClick={() => dispatch({ type: 'IN' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DE' })}>-1</button>
    </div>
  );
};

export default CounterReducer;
