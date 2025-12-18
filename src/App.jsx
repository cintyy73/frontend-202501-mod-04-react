/**
 * 🚀 APP.JSX - Configuración principal de rutas
 * 
 * Conceptos clave:
 * 
 * 1. BrowserRouter: Envuelve toda la app para habilitar routing
 * 2. Routes: Contenedor de todas las rutas
 * 3. Route: Define una ruta específica (path → component)
 * 
 * 📌 LAYOUTS Y RUTAS ANIDADAS:
 * - Las rutas dentro de <Route element={<MainLayout />}> comparten el mismo layout
 * - El componente MainLayout usa <Outlet /> para renderizar las rutas hijas
 * - Esto permite tener Header y Footer en todas las páginas sin repetir código
 * 
 * 📌 RUTA 404:
 * - path="*" captura cualquier ruta que no coincida
 * - Siempre debe ir al final
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Layout (Header + Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User  />} />

        </Route>
        
        {/* Ruta sin Layout - La página 404 no usa el layout principal */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
