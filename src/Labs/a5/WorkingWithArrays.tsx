import React, { useState } from "react";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({ id: 1 });
  return (
    <div>
      <h3>Woring with Arrays</h3>
			<h3>Filtering Array Items</h3>
			<a href={`${API}?completed=true`} className="btn btn-warning">
				Get Completed Todos
			</a>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        className="form-control" color="red"
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>Get Todo by ID</a>
    </div>
  );
}
export default WorkingWithArrays;
