import '../index.css';

export default function ControlledTextBase() {
  return (
    <section className="section">
      <h3>1) Texto controlado</h3>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        className="input"
      />
      <p>Hola, anónimo 👋</p>
    </section>
  );
}
