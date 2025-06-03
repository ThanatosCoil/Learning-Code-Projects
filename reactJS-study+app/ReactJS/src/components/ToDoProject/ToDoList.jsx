import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  let time = new Date();
  let currentTime = `${time.getDate()}.${
    time.getMonth() + 1
  }.${time.getFullYear()}`;

  function inputChange(event) {
    setNewTask(event.target.value);
    console.log(currentTime);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Empty task");
    }
  }

  function completeTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const movedTasks = [...tasks];
      [movedTasks[index], movedTasks[index - 1]] = [
        movedTasks[index - 1],
        movedTasks[index],
      ];
      setTasks(movedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const movedTasks = [...tasks];
      [movedTasks[index], movedTasks[index + 1]] = [
        movedTasks[index + 1],
        movedTasks[index],
      ];
      setTasks(movedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To do list {currentTime}</h1>
      <div className="input-task">
        <input
          type="text"
          placeholder="Your task"
          value={newTask}
          onKeyDown={(e) => (e.key === "Enter" ? addTask() : null)}
          onChange={inputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="task-list">
        <ol>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <span className="task">{task}</span>
                <button
                  className="complete-button"
                  onClick={() => completeTask(index)}
                >
                  ✔
                </button>
                <button className="move-button" onClick={() => moveUp(index)}>
                  👆
                </button>
                <button className="move-button" onClick={() => moveDown(index)}>
                  👇
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
