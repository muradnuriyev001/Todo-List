import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin2Line } from "react-icons/ri";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, { value: todo, id: uuidv4() }]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const emptyTodoHandler = () => {
    setTodos([]);
  };

  console.log(todos);
  return (
    <div className="App">
      <div className="todo-flex">
        <TodoForm addTodo={addTodoHandler} />
        <RiDeleteBin2Line
          title="Delete All"
          onClick={emptyTodoHandler}
          style={{
            fontSize: "35px",
            color: "white",
            paddingLeft: "5px",
            cursor: "pointer",
          }}
        />
      </div>

      {!todos.length ? (
        <h1 className="todo-empty">Todo List is Empty</h1>
      ) : (
        <TodoList deleteTodo={deleteTodoHandler} todos={todos} />
      )}
    </div>
  );
}

export default App;
