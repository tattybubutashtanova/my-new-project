import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() && deadline) {
      setTasks([...tasks, { text: input, completed: false, deadline }]);
      setInput("");
      setDeadline("");
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>To-Do List with Deadlines</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <button onClick={addTask} style={{ padding: "10px" }}>
          Add Task
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")} style={{ marginRight: "10px" }}>
          All
        </button>
        <button
          onClick={() => setFilter("Completed")}
          style={{ marginRight: "10px" }}
        >
          Completed
        </button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              marginBottom: "10px",
              background: task.completed ? "#d4edda" : "#f8d7da",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <div>
              <span
                onClick={() => toggleComplete(index)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text} (Due: {task.deadline})
              </span>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  marginLeft: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  padding: "5px",
                  float: "right",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
