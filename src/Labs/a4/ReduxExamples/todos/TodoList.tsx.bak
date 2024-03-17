import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState({ id: -1, title: "Learn Mongo" });
  const addTodo = (todo: any) => {
    const newTodos = [
      ...todos,
      { ...todo, id: new Date().getTime().toString() },
    ];
    setTodos(newTodos);
    setTodo({ id: -1, title: "" });
  };
  const deleteTodo = (id: any) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({ id: -1, title: "" });
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <button className="btn btn-primary" onClick={() => addTodo(todo)}>
            Add
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => updateTodo(todo)}
          >
            Update
          </button>
          <input
            className="form-control"
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button className="btn btn-secondary" onClick={() => setTodo(todo)}>
              Edit
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
