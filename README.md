# 🧠 REACT – REPASO CLASE 1

## ✅ ¿Qué es React?

React es **una biblioteca de JavaScript** que permite crear interfaces de usuario mediante **componentes reutilizables**.

### Ventajas principales:

- ✅ Facilita la creación de interfaces interactivas.
- ⚡ Usa el **Virtual DOM** para mejorar el rendimiento.
- 🧩 Permite organizar el código en **componentes fáciles de mantener**.
- 🌎 Es muy popular y tiene un gran ecosistema de herramientas y librerías.

---

## 📚 Librería vs Framework

| Característica | Librería | Framework |
|----------------|----------|-----------|
| Control        | El desarrollador elige cómo usarla | El framework dicta cómo estructurar el código |
| Flexibilidad   | Alta     | Media/Baja |
| Ejemplos       | React, Lodash | Angular, Vue |

---

## 🧱 Virtual DOM

El **DOM virtual** es una copia del DOM real que React usa en memoria.

✅ React compara el DOM virtual con el real y **solo actualiza lo que cambió**, lo que mejora el rendimiento.

---

## 🛠 Node.js y NPM

| Herramienta | Descripción | Uso |
|-------------|-------------|-----|
| **Node.js** | Permite ejecutar JavaScript fuera del navegador | Necesario para usar React y herramientas de desarrollo |
| **NPM (Node Package Manager)** | Gestor de paquetes que instala librerías como React o Vite | `npm install nombre-paquete` |

También existen alternativas como **Yarn** o **PNPM**.

---

## 🚀 Comandos para crear proyectos

### 🔹 Con Create React App

```bash
npx create-react-app react-01
cd react-01
npm start   # Inicia en localhost:3000
```

### 🔹 Con Vite

```bash
npm create vite@latest
# → elegir React
# → elegir JavaScript
cd mi-proyecto
npm install
npm run dev  # Inicia en localhost:5173
```

🔹 Extra:

```bash
ctrl + c  # Para detener
code .    # Para abrir en Visual Studio Code
```

---

## 📁 Estructura básica de un proyecto React

```
mi-proyecto/
├─ public/       # Archivos estáticos (index.html)
├─ src/          # Código de la aplicación
│  ├─ components/ # Componentes reutilizables
│  ├─ styles/     # Estilos CSS
│  ├─ hooks/      # Lógica reutilizable
│  └─ services/   # Funciones externas (APIs)
├─ node_modules/  # Dependencias instaladas
```

---

## 🧩 Componentes en React

Un componente es **una función que retorna JSX** (JavaScript + HTML).

```jsx
function Welcome() {
  return <h1>Hola</h1>;
}
```

O con arrow function:

```jsx
const Welcome = () => {
  const name = "Sandra";
  return (
    <div>
      <h1>Hola, {name}!</h1>
    </div>
  );
};

export default Welcome;
```

---

## 📦 Exportar e importar componentes

### ✅ Exportación por defecto

```jsx
// Welcome.jsx
const Welcome = () => <h1>¡Hola!</h1>;
export default Welcome;
```

```jsx
// App.jsx
import Welcome from './Welcome';
```

### ✅ Exportación con nombre

```jsx
// Buttons.jsx
export const PrimaryButton = () => <button>Primary</button>;
export const SecondaryButton = () => <button>Secondary</button>;
```

```jsx
import { PrimaryButton, SecondaryButton } from './Buttons';
```

---

## 🧱 JSX y sintaxis básica

JSX permite escribir HTML dentro de JavaScript.

### Reglas:

- ❗Siempre debe devolver **un solo elemento contenedor**.
- ✅ Todas las etiquetas deben **cerrarse** (`<img />`, `<input />`)
- ✅ Para insertar JavaScript en JSX ➝ **usar llaves `{}`**

```jsx
const name = "Juan";
return <h1>Hola, {name}!</h1>;
```

---

## 🔗 React.Fragment (`<> </>`)

Permite envolver elementos sin agregar un div extra al DOM:

```jsx
<>
  <h1>Título</h1>
  <p>Descripción</p>
</>
```

---

## ✅ Resumen final

| Concepto | Descripción |
|----------|-------------|
| React | Biblioteca para crear interfaces reutilizables |
| Virtual DOM | Representación en memoria del DOM para mejorar rendimiento |
| Node + NPM | Herramientas necesarias para instalar y ejecutar proyectos |
| Vite / CRA | Plantillas para crear proyectos rápidamente |
| JSX | Sintaxis que mezcla HTML y JS |
| Componentes | Bloques reutilizables en React |

---
