/**
 * 🚫 NOT FOUND - Ruta 404 (Catch-All)
 * 
 * Conceptos clave:
 * - Definida en App.jsx como: <Route path="*" element={<NotFound />} />
 * - El asterisco (*) captura CUALQUIER ruta no definida
 * - SIEMPRE debe ir al final de las rutas
 * 
 * ¿Cómo funciona?
 * - React Router intenta hacer match con cada ruta en orden
 * - Si ninguna coincide, llega al *
 * - El * es como un "else" en programación
 * 
 * Ejemplos de URLs que llevan aquí:
 * - /pagina-que-no-existe ✅
 * - /users/abc/xyz ✅
 * - /productos123 ✅
 * 
 * ⚠️ IMPORTANTE: Si el * está antes de otras rutas, capturará todo
 */

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={20} px={6}>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl">
          404
        </Heading>
        <Text fontSize="2xl">
          🚫 Página no encontrada
        </Text>
        
        <Box p={4} bg="red.50" borderRadius="md" maxW="500px">
          <Text fontSize="sm" color="red.800">
            💡 <strong>Ruta catch-all (*):</strong><br/>
            Esta página captura cualquier URL que no exista.<br/>
            Definida como: <code>&lt;Route path="*" element=&lt;NotFound /&gt; /&gt;</code>
          </Text>
        </Box>
        
        <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>
          Ir al inicio
        </Button>
      </VStack>
    </Box>
  );
}
