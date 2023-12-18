import "./Todo.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo">
      <article>{todo.value}</article>
      <div className="delete-checked-buttons">
        <MdOutlineDeleteForever
          title="Delete Todo"
          style={{ fontSize: "22px", cursor: "pointer" }}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheckSquare
          onClick={() => toggleTodo(todo.id)}
          style={{ fontSize: "18px", cursor: "pointer" }}
          title="Mark as checked"
        />
      </div>
    </div>
  );
};

export default Todo;
