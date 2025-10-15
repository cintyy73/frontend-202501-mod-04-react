# Ejemplo en React: Listado de Usuarios

Este ejemplo muestra cómo **recorrer listas**, aplicar **filtros** y usar **renderizado condicional** en React, usando componentes simples y **sin `useState`** (datos fijos).

---

## 📚 Teoría

### 1. Recorrer listas con `.map()`
En React usamos `.map()` para recorrer un array y devolver un nuevo array de elementos JSX.

```js
users.map(user => <UserCard key={user.id} user={user} />)
```

➡️ Esto renderiza una card por cada usuario.

### 2. Filtrar listas con `.filter()`

Con `.filter()` podemos obtener un nuevo array con los elementos que cumplan una condición.
Ejemplo: mostrar solo los usuarios activos.

```js
const activeUsers = users.filter(user => user.isActive);
```

### 3. Renderizado condicional con operador ternario

El operador ternario (`condición ? valorSiTrue : valorSiFalse`) nos permite mostrar diferente contenido según una condición.
Ejemplo: si el usuario está activo:

```js
<p><strong>Estado:</strong> {user.isActive ? "✅ Activo" : "❌ Inactivo"}</p>
```

---

## 🧩 Componentes del ejemplo

### 1. UserCard.jsx

Muestra la información de un usuario en formato de card.

```jsx
import React from "react";

export default function UserCard({ user }) {
  return (
    <div style={styles.card}>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>País:</strong> {user.country}</p>
      <p><strong>Rol:</strong> {user.role}</p>
      {/* Renderizado condicional con ternario */}
      <p><strong>Estado:</strong> {user.isActive ? "✅ Activo" : "❌ Inactivo"}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "left"
  }
};
```

### 2. UserList.jsx

Renderiza una lista completa de usuarios usando `.map()`.

```jsx
import React from "react";
import UserCard from "./UserCard";

export default function UserList({ title, users }) {
  return (
    <div style={styles.section}>
      <h2>{title}</h2>
      <div style={styles.container}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  section: { marginTop: "20px" },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "10px"
  }
};
```

### 3. App.jsx

Es el componente principal:

- Define la lista fija de usuarios.
- Aplica `.filter()` para obtener solo los activos.
- Usa `UserList` para mostrar todos y solo activos.

```jsx
import React from "react";
import UserList from "./UserList";

// Lista fija de usuarios
const users = [
  { id: 1, name: "Ana García", email: "ana@example.com", country: "Argentina", role: "Frontend", isActive: true },
  { id: 2, name: "Luis Pérez", email: "luis@example.com", country: "Chile", role: "Backend", isActive: false },
  { id: 3, name: "María López", email: "maria@example.com", country: "Uruguay", role: "Diseño", isActive: true },
  { id: 4, name: "Carlos Ruiz", email: "carlos@example.com", country: "Perú", role: "QA", isActive: false },
];

export default function App() {
  // Ejemplo de filter: solo usuarios activos
  const activeUsers = users.filter(user => user.isActive);

  return (
    <div style={styles.wrapper}>
      <h1>Gestión de Usuarios</h1>

      {/* Lista completa */}
      <UserList title="Todos los usuarios" users={users} />

      {/* Lista filtrada */}
      <button style={styles.filterBtn}>Mostrar solo activos</button>
      <UserList title="Usuarios activos" users={activeUsers} />
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "20px",
    textAlign: "center"
  },
  filterBtn: {
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "10px"
  }
};
```

---

## 🚀 Resumen

- **`.map()`** → recorre y renderiza listas.
- **`.filter()`** → crea listas filtradas (ej: solo activos).
- **Ternario** → renderiza condicionalmente (true/false).
- **Componentes** → organizan mejor el código (`UserCard`, `UserList`, `App`).