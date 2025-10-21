// Ejemplo de input controlado: el valor del input depende del estado
import { useState } from 'react';
import '../index.css';

export default function ControlledTextBase() {
  // useState permite guardar el valor del input
const [name, setName] = useState('') 
  return (
    <section className="section">
      <h3>1) Texto controlado</h3>
      <p>Hola, {name || 'anónimo' }👋</p>
      <input
        type="text"
        value={name} // El valor está sincronizado con el estado
        onChange={(e)=> setName(e.target.value)} // Actualiza el estado en cada cambio
        autoComplete='off'
        placeholder="Escribí tu nombre"
        className="input"
      />
    </section>
  );
}
