import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={handleChange}
      />
      <div>
        TodoList:
        {list.map((l) => (
          <p>{l}</p>
        ))}
      </div>
      <button onClick={addTask}>add</button>
    </>
  );
};
export default TodoList;
