import { useState } from "react";
import "../index.css";

export default function SimpleFormBase() {
  const [form, setForm] = useState({
    user: "", // uso el name del input
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log({[name]: value})
    console.log(e.target)
  };

  return (
    <section className="section">
      <h3>Formulario simple</h3>
      <form className="grid">
        <label className="grid">
          Nombre
          <input onChange={handleChange} value={form.user} name="user" type="text" className="input" />
        </label>
        <label className="grid">
          Email
          <input onChange={handleChange}
            value={form.email}
            name="email"
            type="email"
            className="input"
          />
        </label>

        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </section>
  );
}
