import React from 'react';

function Todo(props) {
    return (
        <div>
            <h1>{props.todo.task}</h1>
            <h1>{props.todo.id}</h1>
            <h1>{props.todo.completed}</h1>
        </div>
    );
};

export default Todo; 