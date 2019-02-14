import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

const tododata = [
  {
    task: 'eg A Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'eg B Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tododata: tododata,
      task: '',
      id: '',
      completed: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    console.log(e.target);

    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };

    this.setState({
      tododata: [...this.state.tododata, newTodo],
      task: '',
      id: '',
      completed: ''
    });
  };

  handleChanges = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleTodo = todoId => {
    this.setState({
      tododata: this.state.tododata.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          tododata={this.state.tododata}
          toggleTodo={this.toggleTodo}
        />
        <div>
          <TodoForm
            addTodo={this.addTodo}
            task={this.state.task}
            handleChanges={this.handleChanges}
          />
        </div>
      </div>

//Old todo <div>
//          {this.state.tododata.map((todos, index) => (
//            <Todo key={index} todo={todos} toggleTodo={this.toggleTodo} tododata={this.state.tododata} />
//          ))}
//        </div>
    );
  }
}

export default App;


