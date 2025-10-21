import { useState } from "react";
import "../index.css";

export default function TodoListBase() {
  // useState para la tarea actual y la lista de tareas
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
  
    e.preventDefault();

    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  return (
    <div className="section">
      <h1>Lista de tareas</h1>
      <form onSubmit={addTask} className="grid">
        <input
          type="text"
          placeholder="Ingrese una tarea..."
          className="input"
          value={task} // El valor está en el estado
          onChange={(e) => setTask(e.target.value)} // Actualiza el estado
        />
        <button type="submit" className="button">
          Agregar
        </button>
      </form>
      <ul className="list">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
