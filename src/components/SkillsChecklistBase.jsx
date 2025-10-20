import '../index.css';

const allSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Diseño'];

export default function SkillsChecklistBase() {
  return (
    <section className="section">
      <h3>4) Checklist de habilidades</h3>
      <div className="grid checklist-grid">
        {allSkills.map(skill => (
          <label key={skill} className="label">
            <input type="checkbox" />
            {skill}
          </label>
        ))}
      </div>
      <p>Seleccionadas: 0</p>
    </section>
  );
}
