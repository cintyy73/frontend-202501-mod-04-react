/**
 * ℹ️ ABOUT - Página de información
 * 
 * Conceptos clave:
 * 
 * 📌 NAVEGACIÓN HACIA ATRÁS:
 * - navigate('/'): Navega a una ruta específica
 * - navigate(-1): Vuelve a la página anterior (como el botón back del navegador)
 * 
 * 📌 CHAKRA UI - BADGE:
 * - Badge: Componente para mostrar etiquetas o tags
 * - colorScheme: Define el esquema de colores
 * - Útil para estados, categorías, notificaciones
 * 
 * 📌 ICONOS A LA IZQUIERDA:
 * - leftIcon: Icono a la izquierda del texto del botón
 */

import { Box, Heading, Text, Button, VStack, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" color="purple.500">
          ℹ️ About
        </Heading>
        
        {/* Badge - Etiqueta destacada */}
        <Badge colorScheme="purple" fontSize="lg" p={2}>
          Página de información
        </Badge>
        
        <Text fontSize="lg">
          Este es un proyecto de prueba usando Chakra UI v2 y React Router DOM.
        </Text>
        
        {/* Navegación de regreso */}
        <Button
          colorScheme="purple"
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
        >
          Volver a Home
        </Button>
      </VStack>
    </Box>
  );
};

export default About;
