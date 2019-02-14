import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  const sortedList = props.tododata.sort((a, b) => a.completed - b.completed);
  return (
    <div>
      {sortedList.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;