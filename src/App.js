import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './chap.10/components/TodoInsert';
import TodoList from './chap.10/components/TodoList';
import TodoTemplate from './chap.10/components/TodoTemplate';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '기초1',
      checked: true,
    },
    {
      id: 2,
      text: '기초2',
      checked: true,
    },
    {
      id: 3,
      text: '기초3',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
