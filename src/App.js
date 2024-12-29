import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={addTask} style={{ marginLeft: "10px", padding: "10px" }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              padding: "10px",
              marginBottom: "10px",
              background: "#f4f4f4",
              borderRadius: "5px",
            }}
          >
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "5px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
