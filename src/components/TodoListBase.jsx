import '../index.css';

export default function TodoListBase() {
  return (
    <div className="section">
      <h1>Lista de tareas</h1>
      <form className="grid">
        <input type="text" placeholder="Ingrese una tarea..." className="input" />
        <button type="submit" className="button">Agregar</button>
      </form>
      <ul className="list">
        <li>Tarea 1</li>
        <li>Tarea 2</li>
      </ul>
    </div>
  );
}
