// Componente Base: Formulario NO Controlado
// Sin lógica de submit - versión estática para práctica
import '../index.css';

export const FormNoCtr = () => {
  return (
    <section className="section">
      <h3>8) Formulario NO Controlado</h3>
      <form className="grid">
        <label className="grid">
          Nombre
          <input 
            id="nombre" 
            type="text" 
            name="nombre" 
            placeholder="Escribe tu nombre"
            className="input"
            autoComplete="off"
          />
        </label>
        <label className="grid">
          Apellido
          <input 
            id="apellido" 
            type="text" 
            name="apellido" 
            placeholder="Escribe tu apellido"
            className="input"
            autoComplete="off"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}