import React from "react";
import Todo from "../Todo/Todo";

export const TodoList = ({ todos, deleteTodo,toggleTodo }) => {
  
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
