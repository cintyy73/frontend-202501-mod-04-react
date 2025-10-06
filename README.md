# React Class Guide

## 1. Introducción a React
React es una biblioteca de JavaScript para construir interfaces de usuario.
- Permite crear componentes reutilizables.
- Utiliza JSX para mezclar HTML y JS.
- Ideal para aplicaciones web modernas.

### Mini introducción a JSX
JSX es una extensión de JavaScript que permite escribir HTML dentro del código JS.
- Se pueden usar expresiones JS dentro de `{}`.
- Solo puede haber un elemento padre en cada return.
- Siempre se deben cerrar las etiquetas.

## 2. Requisitos previos
- Node.js +22
- npm (viene con Node)
- yarn (opcional: instalar con `npm i -g yarn`)

## 3. Crear proyecto con Vite
### Con npm
```bash
npm create vite@latest 
cd nombre-proyecto
npm install
npm run dev
```

### Con yarn
```bash
yarn create vite
cd nombre-proyecto
yarn
yarn dev
```

## 4. Temas de la clase
- Componentes en React
- JSX y sintaxis
- Reglas de JSX
- React.Fragment
- Cambios de contexto entre JSX y JS
- Imports y exports (default y nombrados)

## 5. Ejercicios progresivos

### Ejercicio 1 – First basic component
Creá un componente llamado `Greeting` que muestre el mensaje:
`Welcome! This is my first React component.`

### Ejercicio 2 – JSX con variables (interpolación)
Creá un componente llamado `WelcomeMessage`. Declará una constante `userName` y mostrala así:
`Hello, {userName}! Welcome to the platform.`

### Ejercicio 3 – Uso de Fragment
Creá un componente `UserProfile` que muestre un título con un nombre y una breve descripción, usando `<></>` en lugar de `<div>`.

### Ejercicio 4 – Lista con map()
Creá un componente `TaskList` con un array de al menos 4 tareas y mostrálas dentro de `<ul>` usando `.map()`.

### Ejercicio 5 – Render condicional (`?` o `&&`)
Creá un componente `LoginStatus` con una constante booleana `isLoggedIn`.
- Si `true`: `You are logged in.`
- Si `false`: `Access denied. Please log in.`

### Ejercicio 6 – Import y Export de componentes
Creá dos componentes en archivos separados:
1. `Header.js` – muestra un título
2. `Footer.js` – muestra un mensaje final

Luego importalos en `App.js`:
```js
import Header from "./Header";
import Footer from "./Footer";
```
Y mostrálos en pantalla.

## 6. Ejemplo integrador
### Estructura de archivos
```
src/
 ├─ App.js
 ├─ components/
      ├─ Greeting.js
      ├─ TaskList.js
      ├─ LoginStatus.js
      ├─ Header.js
      ├─ Footer.js
```

### Greeting.js
```js
export default function Greeting() {
  return <h1>Welcome! This is my first React component.</h1>;
}
```

### TaskList.js
```js
export default function TaskList() {
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
  return (
    <>
      <h2>Task List:</h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </>
  );
}
```

### LoginStatus.js
```js
export default function LoginStatus({ isLoggedIn }) {
  return <>{isLoggedIn ? <p>You are logged in.</p> : <p>Access denied. Please log in.</p>}</>;
}
```

### Header.js
```js
export default function Header() {
  return <h1>Main Page Header</h1>;
}
```

### Footer.js
```js
export default function Footer() {
  return <p>© 2025 All rights reserved.</p>;
}
```

### App.js
```js
import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import LoginStatus from "./components/LoginStatus";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <Header />
      <Greeting />
      <TaskList />
      <LoginStatus isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
```

