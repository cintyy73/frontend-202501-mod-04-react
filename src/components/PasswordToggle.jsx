// Componente Base: Campo de contraseña con botón para mostrar/ocultar
// Sin useState - versión estática para práctica
import '../index.css';

export default function PasswordToggle() {
  return (
    <section className="section">
      <h3>6) Toggle de Contraseña</h3>
      <div className="grid">
        <label htmlFor="password">Contraseña</label>
        <div className="label">
          {/* Campo de entrada para la contraseña */}
          <input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            className="input"
          />
          {/* Botón para alternar la visibilidad de la contraseña */}
          <button
            type="button"
            className="button"
          >
            Mostrar
          </button>
        </div>
      </div>
    </section>
  );
}