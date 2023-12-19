import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import styles from "./Todo.module.css";
const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <article>{todo.value}</article>
      <div className={styles.deleteCheckedBtnCenter}>
        <MdOutlineDeleteForever
          title="Delete Todo"
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheckSquare
          onClick={() => toggleTodo(todo.id)}
          className={styles.checkIcon}
          title="Mark as checked"
        />
      </div>
    </div>
  );
};

export default Todo;
