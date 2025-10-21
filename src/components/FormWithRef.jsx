// Este componente muestra cómo usar useRef para manejar un formulario no controlado.
import { useRef } from 'react';

export default function FormWithRef() {
  // Creamos referencias para los campos del formulario.
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);
  const activeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtenemos los valores directamente desde las referencias.
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
      active: activeRef.current.checked,
    };
    console.log('Datos del formulario:', formData);
    alert(`Formulario enviado: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <section style={{ border: '1px solid #eee', padding: 16, borderRadius: 12 }}>
      <h3>Formulario con useRef</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          Nombre
          <input ref={nameRef} type="text" placeholder="Escribe tu nombre" />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          Email
          <input ref={emailRef} type="email" placeholder="Escribe tu email" />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          Rol
          <select ref={roleRef} defaultValue="frontend">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Diseño</option>
          </select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input ref={activeRef} type="checkbox" />
          Activo
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}