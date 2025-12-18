/**
 * 🧭 NAVBAR - Barra de Navegación con Links
 * 
 * Conceptos clave:
 * - Link de react-router-dom para navegación
 * - Combinado con estilos de Chakra UI
 * - Navegación sin recargar la página
 * 
 * ¿Por qué "as={Link}"?
 * - ChakraLink proporciona estilos
 * - Link de router proporciona navegación
 * - "as" combina ambos componentes
 * 
 * Patrón común:
 * <ChakraLink as={RouterLink} to="...">Texto</ChakraLink>
 */

import { Box, Flex, Link as ChakraLink, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="teal.500" px={4} py={4}>
      <Flex alignItems="center">
        {/* 🚀 Logo / Título */}
        <ChakraLink 
          as={Link} 
          to="/" 
          color="white" 
          fontSize="xl" 
          fontWeight="bold" 
          mr={8}
          _hover={{ textDecoration: "none", opacity: 0.8 }}
        >
          🚀 React Router App
        </ChakraLink>
        
        {/* 📍 Links de navegación */}
        <ChakraLink 
          as={Link} 
          to="/" 
          color="white" 
          mr={4}
          _hover={{ textDecoration: "underline" }}
        >
          Home
        </ChakraLink>
        <ChakraLink 
          as={Link} 
          to="/about" 
          color="white" 
          mr={4}
          _hover={{ textDecoration: "underline" }}
        >
          About
        </ChakraLink>
        <ChakraLink 
          as={Link} 
          to="/users" 
          color="white" 
          mr={4}
          _hover={{ textDecoration: "underline" }}
        >
          Users
        </ChakraLink>
        <ChakraLink 
          as={Link} 
          to="/products" 
          color="white"
          _hover={{ textDecoration: "underline" }}
        >
          Products
        </ChakraLink>
        
        <Spacer />
        
        {/* 💡 Indicador visual */}
        <Text color="white" fontSize="sm" opacity={0.8}>
          🔗 Click para navegar sin recargar
        </Text>
      </Flex>
    </Box>
  );
}
