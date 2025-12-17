/**
 * 🧭 HEADER - Barra de navegación principal
 * 
 * Conceptos clave:
 * 
 * 📌 NAVEGACIÓN CON LINK:
 * - Button as={Link}: Combina Button de Chakra con Link de React Router
 * - to="/ruta": Define la ruta de destino
 * - La navegación NO recarga la página (característica de SPA)
 * 
 * 📌 CHAKRA UI - COMPONENTES:
 * - Box: Contenedor general (como un div estilizado)
 * - Flex: Contenedor flexbox para layouts
 * - Spacer: Espacio flexible entre elementos
 * - Button: Botón estilizado
 * 
 * 📌 ICONOS:
 * - Importados de @chakra-ui/icons
 * - Se usan con leftIcon o rightIcon en los botones
 */

import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box bg="teal.600" px={8} py={4} color="white" shadow="md">
      <Flex align="center">
        <Heading as="h1" size="lg">
          🚀 Mi Aplicación
        </Heading>
        <Spacer /> {/* 👈 Empuja los botones hacia la derecha */}
        
        <Flex gap={4} align="center">
          {/* Botones con navegación - Combinan Chakra Button con React Router Link */}
          <Button as={Link} to="/" colorScheme="whiteAlpha" variant="ghost" size="md">
            Home
          </Button>
          <Button as={Link} to="/about" colorScheme="whiteAlpha" variant="ghost" size="md">
            About
          </Button>
          <Button as={Link} to="/users" colorScheme="whiteAlpha" variant="ghost" size="md">
            Users
          </Button>
          <Button colorScheme="whiteAlpha" variant="outline" size="sm" leftIcon={<SunIcon />}>
            Tema
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
