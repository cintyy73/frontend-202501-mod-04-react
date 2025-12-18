/**
 * 👥 USERS - Navegación Declarativa con Link
 * 
 * Conceptos clave:
 * - Link es el componente para crear enlaces en React Router
 * - NO usar <a href="..."> porque recarga la página
 * - Link funciona como <a> pero sin recargar
 * 
 * Diferencia Link vs useNavigate:
 * - Link: para navegación en la UI (menús, botones visibles)
 * - useNavigate: para navegación programática (después de acciones)
 * 
 * 💡 Nota: Usamos "as={Link}" para combinar estilos de Chakra con Link de Router
 */

import { Box, Heading, List, ListItem, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// 📦 Datos de ejemplo (en una app real vendrían de una API)
const users = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Margaret Hamilton" },
];

export default function Users() {
  return (
    <Box py={10} px={6} maxW="800px" mx="auto">
      <Heading as="h1" size="2xl" mb={6}>
        👥 Lista de Usuarios
      </Heading>
      
      <Box mb={6} p={4} bg="blue.50" borderRadius="md">
        <Text fontSize="sm" color="blue.800">
          💡 Cada nombre es un <strong>Link</strong> que navega sin recargar la página.
          Click en cualquier usuario para ver su detalle.
        </Text>
      </Box>
      
      <List spacing={3}>
        {users.map((user) => (
          <ListItem key={user.id} fontSize="lg">
            {/* 🔗 Link genera rutas dinámicas: /users/1, /users/2, etc. */}
            <ChakraLink 
              as={Link} 
              to={`/users/${user.id}`} 
              color="teal.500"
              _hover={{ textDecoration: "underline" }}
            >
              {user.name}
            </ChakraLink>
          </ListItem>
        ))}
      </List>
      
      <Box mt={8} p={4} bg="gray.50" borderRadius="md">
        <Text fontSize="sm" color="gray.600">
          🎯 <strong>¿Por qué Link y no &lt;a&gt;?</strong><br/>
          - &lt;a href="..."&gt; recarga toda la página ❌<br/>
          - &lt;Link to="..."&gt; solo cambia el componente ✅
        </Text>
      </Box>
    </Box>
  );
}
