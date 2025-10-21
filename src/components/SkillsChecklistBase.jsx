import { useState } from 'react';
import '../index.css';

const allSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Diseño'];

export default function SkillsChecklistBase() {
  // useState para guardar las habilidades seleccionadas
  const [selected, setSelected] = useState([])

  // toggle agrega o quita una habilidad del array 'selected'
  // Si la habilidad ya está, la quita usando filter
  // Si no está, la agrega usando spread [...prev, skill]
  const toggle = (skill) => {
    setSelected(prev  =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill) // filter crea un nuevo array sin la habilidad
        : [...prev , skill] // spread agrega la habilidad al array
    )
  }
  return (
    <section className="section">
      <h3>4) Checklist de habilidades</h3>
      <div className="grid checklist-grid">
        {allSkills.map(skill => (
          <label key={skill} className="label">
            <input type="checkbox" 
            value={selected.includes(skill)} // El estado determina si está seleccionado
            onChange={()=> toggle(skill)}/>
            {skill}
          </label>
        ))}
      </div>
      <p>{selected.length}</p>
    </section>
  );
}
