# Routing en React – React Router

Este material resume **todo lo necesario para entender y usar routing en React**, con ejemplos simples y reales.

---

## 🧠 ¿Qué es una SPA?

Una **Single Page Application (SPA)** es una aplicación web que:

* Carga **un solo HTML**
* No recarga la página al navegar
* Cambia la interfaz según la URL usando JavaScript

👉 En React, **la URL decide qué componente se muestra**.

---

## 🔀 ¿Qué es el routing?

El **routing** permite:

* Escuchar cambios en la URL
* Renderizar distintos componentes
* Navegar sin recargar la página

En React usamos la librería **react-router-dom**.

---

## 📦 Instalación

```bash
nvm --version
nvm install 22.12.0
nvm use 22.12.0
node --version
yarn add react-router-dom
npm install react-router-dom
```

---

## 🧱 Estructura básica del Router

```jsx
BrowserRouter
 └── Routes
      └── Route (path → componente)
```

Ejemplo mínimo:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 🔗 Navegación con Link

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

* `Link` reemplaza a `<a>`
* Evita recargar la página

---

## 🧭 Navegación imperativa – useNavigate

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/login");
```

Sirve para redirigir:

* después de un login
* al enviar un formulario
* desde un botón

---

## 🧩 Rutas dinámicas – useParams

Definir una ruta dinámica:

```jsx
<Route path="/users/:id" element={<UserDetail />} />
```

Leer el parámetro:

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

👉 Ideal para detalles: usuarios, productos, posts.

---

## 🔍 Query params – useSearchParams

Ejemplo de URL:

```
/products?q=react
```

Leer y modificar:

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("q");
```

* Los query params se pueden compartir
* Quedan guardados en la URL

---

## 🚫 Página 404 (ruta no encontrada)

```jsx
<Route path="*" element={<NotFound />} />
```

* Captura cualquier ruta inexistente
* Siempre va al final

---

## 🔐 Redirecciones y rutas protegidas

```jsx
import { Navigate } from "react-router-dom";

if (!user) return <Navigate to="/login" />;
```

---

## 🏗️ Layouts y rutas anidadas – Outlet

Los **layouts** permiten compartir estructura (header, footer, sidebar) entre varias páginas.

### ¿Qué es un Layout?

Un layout es un componente que **envuelve** otras páginas y define elementos comunes:

* Header / Navbar
* Footer
* Sidebar
* Container general

### Componente Outlet

`<Outlet />` es el lugar donde React Router **renderiza las rutas hijas**.

```jsx
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
};
```

### Configuración de rutas con Layout

```jsx
<Routes>
  {/* Rutas con Layout */}
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
  </Route>
  
  {/* Rutas sin Layout */}
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Ventajas de usar Layouts

✅ **Reutilización**: Header y Footer se escriben una sola vez
✅ **Organización**: Separa estructura de contenido
✅ **Mantenimiento**: Cambios en el layout afectan todas las páginas
✅ **Flexibilidad**: Puedes tener múltiples layouts (Admin, Public, etc.)

### Ejemplo con múltiples layouts

```jsx
<Routes>
  {/* Layout público */}
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
  
  {/* Layout de administración */}
  <Route element={<AdminLayout />}>
    <Route path="/admin" element={<Dashboard />} />
    <Route path="/admin/users" element={<Users />} />
  </Route>
</Routes>
```

---

## 🎨 Chakra UI + React Router

### Instalación de Chakra UI v2

```bash
npm install @chakra-ui/react@^2 @chakra-ui/icons@^2 @emotion/react @emotion/styled framer-motion
```

### Configuración básica

```jsx
// main.jsx
import { ChakraProvider } from '@chakra-ui/react';

<ChakraProvider>
  <App />
</ChakraProvider>
```

### Navegación con Chakra

Combinar `Link` de React Router con `Button` de Chakra:

```jsx
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

<Button as={Link} to="/about" colorScheme="teal">
  Ir a About
</Button>
```

O usar `useNavigate` con botones:

```jsx
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<Button onClick={() => navigate('/about')} colorScheme="teal">
  Ir a About
</Button>
```

---

## ✅ Checklist mental de routing

Si entendés esto, entendés routing:

* La URL define qué componente se renderiza
* `Route` conecta URL con componente
* `Link` navega sin recargar
* `useParams` lee IDs dinámicos
* `useNavigate` redirige programáticamente
* `useSearchParams` lee query strings
* `<Outlet />` renderiza rutas hijas en un Layout
* Layouts comparten estructura entre páginas
* `*` maneja el 404

---
