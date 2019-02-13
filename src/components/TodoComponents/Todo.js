import React from 'react';

function Todo(props) {
    return (
        <div>
            <h1>{props.todo.task}</h1>
        </div>
    );
};

export default Todo; 