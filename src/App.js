import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() && deadline) {
      setTasks([
        ...tasks,
        { text: input, completed: false, deadline, priority },
      ]);
      setInput("");
      setDeadline("");
      setPriority("Medium");
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

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setInput(taskToEdit.text);
    setDeadline(taskToEdit.deadline);
    setPriority(taskToEdit.priority);
    deleteTask(index);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const sortTasks = (tasks) => {
    if (sortBy === "priority") {
      return [...tasks].sort((a, b) => {
        const priorities = { High: 1, Medium: 2, Low: 3 };
        return priorities[a.priority] - priorities[b.priority];
      });
    } else {
      return [...tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }
  };

  const filteredTasks = sortTasks(
    tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Advanced To-Do List</h1>
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
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask} style={{ padding: "10px" }}>
          Add Task
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks"
          style={{ padding: "10px", fontSize: "16px", width: "200px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSortBy("date")} style={{ marginRight: "10px" }}>
          Sort by Date
        </button>
        <button onClick={() => setSortBy("priority")} style={{ marginRight: "10px" }}>
          Sort by Priority
        </button>
        <button onClick={clearAllTasks}>Clear All</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              padding: "10px",
              marginBottom: "10px",
              background: task.completed ? "#d4edda" : "#f4f4f4",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <div>
              <span onClick={() => toggleComplete(index)}>
                {task.text} (Due: {task.deadline}, Priority: {task.priority})
              </span>
              <button
                onClick={() => editTask(index)}
                style={{
                  marginLeft: "10px",
                  background: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  padding: "5px",
                }}
              >
                Edit
              </button>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
