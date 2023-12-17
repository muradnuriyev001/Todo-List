import "./Todo.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <article>{todo.value}</article>

      <div className="logos-flex">
        <MdOutlineDeleteForever
          title="Delete Todo"
          style={{ fontSize: "22px", cursor: "pointer" }}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheckSquare
          style={{ fontSize: "18px", cursor: "pointer" }}
          title="Mark as checked"
        />
      </div>
    </div>
  );
};

export default Todo;
