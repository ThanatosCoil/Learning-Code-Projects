import { useState } from "react";

interface Todo {
  completed: boolean;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }
    setTodos([...todos, { completed: false, text: newTodo }]);
    setNewTodo("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              key={index}
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
