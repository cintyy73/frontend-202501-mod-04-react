// Componente Base: Formulario con useRef (versión estática)
// Sin useRef - versión estática para práctica
import '../index.css';

export default function FormWithRef() {
  return (
    <section className="section">
      <h3>7) Formulario con useRef</h3>
      <form className="grid">
        <label className="grid">
          Nombre
          <input type="text" placeholder="Escribe tu nombre" className="input" />
        </label>
        <label className="grid">
          Email
          <input type="email" placeholder="Escribe tu email" className="input" />
        </label>
        <label className="grid">
          Rol
          <select className="input">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Diseño</option>
          </select>
        </label>
        <label className="label">
          <input type="checkbox" />
          Activo
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}