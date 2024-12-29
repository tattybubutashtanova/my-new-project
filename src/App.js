import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
   
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    
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
      <ul>
  {filteredTasks.map((task, index) => (
    <li
    key={index}
    className={task.completed ? "completed" : "pending"}
  >
    <span onClick={() => toggleComplete(index)}>
      {task.text} (Due: {task.deadline})
    </span>
    <button onClick={() => deleteTask(index)}>Delete</button>
  </li>
  
  ))}
</ul>

    </div>
  );
}

export default App;
