import '../index.css';

export default function SimpleFormBase() {
  return (
    <section className="section">
      <h3>5) Formulario simple</h3>
      <form className="grid">
        <label className="grid">
          Nombre
          <input name="name" type="text" className="input" />
        </label>
        <label className="grid">
          Email
          <input name="email" type="email" className="input" />
        </label>
        <label className="grid">
          Rol
          <select name="role" className="input">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Diseño</option>
          </select>
        </label>
        <label className="label">
          <input name="active" type="checkbox" />
          Activo
        </label>
        <button type="submit" className="button">Enviar</button>
      </form>
    </section>
  );
}
