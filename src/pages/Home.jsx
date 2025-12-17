/**
 * 🏠 HOME - Página de inicio
 * 
 * Conceptos clave:
 * 
 * 📌 NAVEGACIÓN IMPERATIVA - useNavigate:
 * - useNavigate() devuelve una función para navegar programáticamente
 * - Se usa en eventos como onClick, después de un login, al enviar un form, etc.
 * - navigate('/ruta'): Navega a una ruta específica
 * 
 * 📌 CHAKRA UI - VStack:
 * - VStack: Stack vertical (apila elementos verticalmente)
 * - spacing: Espacio entre elementos
 * - align: Alineación de los elementos
 * 
 * 📌 BOTONES CON ICONOS:
 * - rightIcon: Agrega un icono a la derecha del texto
 * - leftIcon: Agrega un icono a la izquierda del texto
 */

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Home = () => {
  // Hook para navegación programática
  const navigate = useNavigate();

  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" color="teal.500">
          🏠 Home
        </Heading>
        <Text fontSize="lg">
          Bienvenido al proyecto con Chakra UI y React Router DOM
        </Text>
        
        {/* Navegación con useNavigate - Útil para redirecciones desde eventos */}
        <Button
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => navigate('/about')}
        >
          Ir a About
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
