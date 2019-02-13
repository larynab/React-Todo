import React from 'react';

import Todo from './components/TodoComponents/Todo';

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
    e.preventdefault();
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
