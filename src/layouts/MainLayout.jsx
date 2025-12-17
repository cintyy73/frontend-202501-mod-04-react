/**
 * 🏗️ MAIN LAYOUT - Layout principal con Header y Footer
 * 
 * Conceptos clave:
 * 
 * 📌 OUTLET:
 * - <Outlet /> es donde React Router renderiza las rutas hijas
 * - Cada vez que cambias de ruta, el contenido de <Outlet /> cambia
 * - Header y Footer se mantienen fijos
 * 
 * 📌 CHAKRA UI - FLEX:
 * - direction="column": Organiza elementos verticalmente (Header → Content → Footer)
 * - minH="100vh": Altura mínima del 100% del viewport
 * - flex="1": El contenido principal ocupa todo el espacio disponible
 * 
 * 📌 ESTRUCTURA:
 * Header (fijo arriba)
 *   ↓
 * Outlet (contenido dinámico según la ruta)
 *   ↓
 * Footer (fijo abajo)
 */

import { Flex, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Contenido principal - Aquí se renderizan las páginas */}
      <Box flex="1" bg="gray.50">
        <Outlet /> {/* 👈 Las rutas hijas se renderizan aquí */}
      </Box>
      
      <Footer />
    </Flex>
  );
};

export default MainLayout;
