import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input
                type="text"
                value={props.task}
                name="task"
                onChange={props.handleChanges}
                placeholder="task"
            />
            <button type="submit">Add Task</button>
            <button type="submit">Clear Completed</button>
        </form>
    );
};

export default TodoForm;