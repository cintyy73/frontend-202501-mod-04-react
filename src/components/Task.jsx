const Task = ({ completed, name, onToggle }) => {
  console.log(completed, name);

  return (
    <div className="tarea-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="tarea-checkbox"
      />
      <span  className={`tarea-nombre ${completed ? "completada" : ""}`}>{name}</span>
    </div>
  );
};

export default Task;
