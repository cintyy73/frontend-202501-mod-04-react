/**
 * ℹ️ ABOUT - Ruta Estática Simple
 * 
 * Conceptos clave:
 * - Ruta estática: siempre renderiza el mismo contenido
 * - Definida en App.jsx como: <Route path="/about" element={<About />} />
 * - No recibe parámetros ni query strings
 * 
 * Este es el tipo más básico de ruta:
 * ✅ URL fija (/about)
 * ✅ Contenido estático
 * ✅ Sin datos dinámicos
 */

import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <Box py={10} px={6} maxW="800px" mx="auto">
      <Heading as="h1" size="2xl" mb={4}>
        ℹ️ About
      </Heading>
      <Text fontSize="xl" mb={6}>
        Esta es una aplicación de ejemplo con React Router y Chakra UI v2
      </Text>
      
      <Box mt={8} p={6} bg="teal.50" borderRadius="md">
        <Heading size="md" mb={4}>📚 Conceptos implementados:</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            <strong>Rutas estáticas</strong> - Como esta página
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            <strong>Rutas dinámicas</strong> - Users con IDs
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            <strong>Query params</strong> - Búsqueda en Products
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            <strong>Navegación</strong> - Link y useNavigate
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.500" />
            <strong>404</strong> - Página no encontrada
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
