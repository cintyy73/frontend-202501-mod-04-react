import { useState } from 'react';
import '../index.css';

export default function ControlledTextBase() {
const [name, setName] = useState('') 
  return (
    <section className="section">
      <h3>1) Texto controlado</h3>
      <p>Hola, {name || 'anónimo' }👋</p>
      <input
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
autoComplete='off'
        placeholder="Escribí tu nombre"
        className="input"
      />
    </section>
  );
}
