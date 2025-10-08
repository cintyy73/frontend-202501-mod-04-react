# 🧩 React Clase 3 — Componentes y Props (Login & Button)

## 🎯 Objetivos de la clase
- Comprender qué son los componentes funcionales.
- Aprender a pasar información mediante **props**.
- Usar **desestructuración** y **valores por defecto**.
- Entender el uso del **prop children**.
- Aplicar el concepto de **composición** con un caso práctico: **Login**.

---

## 🧠 1. Componentes como funciones

Los componentes son **funciones de JavaScript** que devuelven elementos JSX.

```jsx
function Title() {
  return <h1>Welcome to MyApp</h1>;
}

export default function App() {
  return <Title />;
}
```

---

## 🧩 2. Props

Las **props** son los **parámetros** que se pasan a un componente.

```jsx
function Button(props) {
  return <button>{props.label}</button>;
}

export default function App() {
  return <Button label="Iniciar sesión" />;
}
```

---

## ⚙️ 3. Desestructurando props y valores por defecto

```jsx
function Button({ label = "Enviar", color = "gray" }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px"
      }}
    >
      {label}
    </button>
  );
}

export default function App() {
  return <Button label="Login" color="green" />;
}
```

---

## 🧒 4. Prop children

El **prop `children`** permite anidar contenido dentro de un componente.

```jsx
function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card>
      <h2>Iniciar sesión</h2>
      <p>Por favor, ingresa tus credenciales</p>
    </Card>
  );
}
```

---

## 🧱 5. Composición

Podemos combinar varios componentes para construir un formulario de login.

```jsx
function Button({ label = "Enviar", color = "gray" }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        marginTop: "10px",
        width: "100%"
      }}
    >
      {label}
    </button>
  );
}

function Input({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        display: "block",
        width: "100%",
        marginBottom: "10px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px"
      }}
    />
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "50px auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {children}
    </div>
  );
}

function LoginForm() {
  return (
    <Card>
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Contraseña" />
      <Button label="Iniciar sesión" color="#007bff" />
    </Card>
  );
}

export default function App() {
  return <LoginForm />;
}
```

---

## 💪 6. Ejercicios prácticos

### 🧠 Ejercicio 1
Crear un componente `Input` con props `placeholder` y `type`.

### 🧠 Ejercicio 2
Crear un `Button` con prop `disabled` y cambiar el color si está desactivado.

### 🧠 Ejercicio 3
Usar `children` para crear un componente `Card` que contenga cualquier contenido.

### 🧠 Ejercicio 4
Combinar `Card`, `Input` y `Button` para crear `LoginForm`.

### 🧠 Ejercicio 5
Agregar una prop `variant` al botón con estilos distintos (`primary`, `secondary`, `danger`).

---

## 🎓 Conclusión
✔ Los componentes son funciones que devuelven JSX.  
✔ Las props permiten personalizar componentes.  
✔ `children` facilita la composición.  
✔ La desestructuración y valores por defecto hacen el código más limpio.  
✔ La composición permite construir interfaces complejas a partir de componentes simples.
