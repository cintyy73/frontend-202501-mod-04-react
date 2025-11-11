import { useState } from "react";
import Task from "./components/Task";
import './components/tasks.css'
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Exercise", completed: true },
    { id: 2, name: "Read a book", completed: false },
    { id: 3, name: "Study React", completed: false },
    { id: 4, name: "Go shopping", completed: false },
    { id: 5, name: "Cook dinner", completed: true },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter(t=>t.completed).length
  const pendingTasks = tasks.length - completedTasks
  return (
        <div className="lista-tareas-container">

        <div className="contador">
        <div>
          <strong>Completed:</strong> <span className="contador-completas">{completedTasks}</span>
        </div>
        <div>
          <strong>Pending:</strong> <span className="contador-pendientes">{pendingTasks}</span>
        </div>
        <div>
          <strong>Total:</strong> {tasks.length}
        </div>
      </div>
      <div className="tareas-lista">
        {tasks.map((task) => (
          <Task key={task.id} name={task.name} completed={task.completed} onToggle={()=> toggleTask(task.id)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
