import React from "react";
import Todo from "../Todo/Todo";

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo deleteTodo={deleteTodo} key={index} todo={todo} />
      ))}
    </div>
  );
};
