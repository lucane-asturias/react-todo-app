import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo] //old state plus new todo
        })
    }
    //making a new array with filter and removing todo given an id
    //filter all todos that are not that id: meaning filter out one with that id
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask} //existing todo + new task
            }
            return todo; //otherwise return todo unchanged
        });
        this.setState({ todos: updatedTodos});
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed } //set the opposite
            }
            return todo; //otherwise return todo unchanged
        });
        this.setState({ todos: updatedTodos});
    }
  render() {
    const todos = this.state.todos.map(todo => {
        return (
            <Todo 
                key={todo.id}
                id={todo.id} 
                task={todo.task}
                completed={todo.completed} 
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
        );
    });
    return (
      <div className="TodoList">
        <h1>Todo List! 
            <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList;
