import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import { IoTrashBinOutline } from "react-icons/io5";
import { AiOutlineClear } from "react-icons/ai";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, { value: todo, id: uuidv4(), isCompleted: false }]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const emptyTodoHandler = () => {
    setTodos([]);
  };

  const deleteAllCompletedTodosHandler = (isCompleted) => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="todo-flex">
        <TodoForm addTodo={addTodoHandler} />
        <div className="todo-logos-flex">
          <IoTrashBinOutline
            title="Delete All"
            onClick={emptyTodoHandler}
            className="icons"
          />
          <AiOutlineClear
            title="Delete All Completed"
            onClick={deleteAllCompletedTodosHandler}
            className="icons"
          />
        </div>
      </div>

      {!todos.length ? (
        <h1 className="todo-empty">Todo List is Empty</h1>
      ) : (
        <TodoList
          toggleTodo={toggleTodoHandler}
          deleteTodo={deleteTodoHandler}
          todos={todos}
        />
      )}
    </div>
  );
}

export default App;
