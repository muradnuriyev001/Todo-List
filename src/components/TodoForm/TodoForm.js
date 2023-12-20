import { useState } from "react";
import "./TodoForm.css";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (value.length) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <input
        value={value}
        placeholder="Enter your Todo"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="form-button" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
