import '../index.css';

export default function CounterWithStepBase() {
  return (
    <section className="section">
      <h3>2) Contador con paso</h3>
      <label className="label">
        Paso:
        <input
          type="number"
          min={1}
          className="input"
        />
      </label>
      <div className="label">
        <button className="button">-</button>
        <strong className="strong">0</strong>
        <button className="button">+</button>
      </div>
    </section>
  );
}
