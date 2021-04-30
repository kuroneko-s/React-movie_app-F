import React, { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
