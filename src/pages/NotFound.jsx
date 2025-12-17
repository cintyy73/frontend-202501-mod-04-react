/**
 * 🚫 NOT FOUND - Página 404
 * 
 * Conceptos clave:
 * 
 * 📌 RUTA 404:
 * - Esta página se muestra cuando una ruta no existe
 * - Se define con path="*" en las Routes
 * - Debe estar al final de todas las rutas
 * - En este proyecto NO usa el layout (no tiene Header/Footer)
 * 
 * 📌 ICONOS CON TAMAÑO:
 * - boxSize: Define el tamaño del icono
 * - Puede ser un número (en unidades de Chakra) o un valor CSS
 * 
 * 📌 CENTRADO:
 * - textAlign="center": Centra el texto
 * - VStack con spacing: Apila elementos verticalmente con espacio entre ellos
 */

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { WarningIcon } from '@chakra-ui/icons';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box p={8} textAlign="center">
      <VStack spacing={6}>
        {/* Icono grande de advertencia */}
        <WarningIcon boxSize={16} color="red.500" />
        
        <Heading as="h1" size="2xl" color="red.500">
          404
        </Heading>
        
        <Text fontSize="xl">
          Página no encontrada
        </Text>
        
        {/* Botón para volver al inicio */}
        <Button
          colorScheme="blue"
          onClick={() => navigate('/')}
        >
          Ir al inicio
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
