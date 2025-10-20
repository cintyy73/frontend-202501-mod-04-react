import '../index.css';

const initialUsers = [
  { id: 1, name: 'Ana García', role: 'Frontend' },
  { id: 2, name: 'Luis Pérez', role: 'Backend' },
  { id: 3, name: 'María López', role: 'Diseño' },
  { id: 4, name: 'Carlos Ruiz', role: 'QA' },
];

export default function LiveFilterListBase() {
  return (
    <section className="section">
      <h3>3) Filtro en vivo</h3>
      <input
        type="text"
        placeholder="Buscar por nombre o rol"
        className="input"
      />
      <ul className="list">
        {initialUsers.map(u => (
          <li key={u.id}>
            {u.name} — <em>{u.role}</em>
          </li>
        ))}
      </ul>
      <p>Total: {initialUsers.length}</p>
    </section>
  );
}
