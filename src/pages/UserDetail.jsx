/**
 * 👤 USER DETAIL - Rutas Dinámicas con useParams
 * 
 * Conceptos clave:
 * - useParams extrae parámetros de la URL
 * - Definida en App.jsx como: <Route path="/users/:id" element={<UserDetail />} />
 * - :id es un parámetro dinámico (puede ser cualquier valor)
 * 
 * Ejemplo de URLs:
 * - /users/1 → { id: "1" }
 * - /users/2 → { id: "2" }
 * - /users/999 → { id: "999" }
 * 
 * ⚠️ IMPORTANTE: useParams siempre retorna strings
 * Por eso usamos parseInt(id) para comparar con números
 * 
 * Casos de uso:
 * ✅ Detalles de productos: /products/:productId
 * ✅ Perfiles de usuarios: /users/:userId
 * ✅ Posts de blog: /posts/:postId
 */

import { Box, Heading, Text, Button, Badge, VStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

// 📦 Datos de ejemplo
const users = [
  { id: 1, name: "Ada Lovelace", role: "Matemática" },
  { id: 2, name: "Grace Hopper", role: "Científica de la computación" },
  { id: 3, name: "Margaret Hamilton", role: "Ingeniera de software" },
];

export default function UserDetail() {
  // 🎯 useParams extrae parámetros de la URL
  // Si la URL es /users/2, entonces id = "2"
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(useParams())
  // 🔍 Buscar el usuario por ID
  // ⚠️ Convertir id a número porque useParams retorna string
  const user = users.find((u) => u.id === Number(id));

  // 🚫 Si no existe el usuario, mostrar error
  if (!user) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="xl" mb={4}>
          ❌ Usuario no encontrado
        </Heading>
        <Text color="gray.600" mb={6}>
          El usuario con ID <Badge colorScheme="red">{id}</Badge> no existe
        </Text>
        <Button colorScheme="teal" onClick={() => navigate("/users")}>
          ← Volver a usuarios
        </Button>
      </Box>
    );
  }

  // ✅ Si existe, mostrar la información
  return (
    <Box py={10} px={6} maxW="800px" mx="auto">
      <VStack align="start" spacing={6}>
        <Box>
          <Badge colorScheme="teal" fontSize="md" mb={2}>
            ID: {id}
          </Badge>
          <Heading as="h1" size="2xl">
            👤 {user.name}
          </Heading>
        </Box>
        
        <Text fontSize="xl">
          <strong>Rol:</strong> {user.role}
        </Text>
        
        <Box p={4} bg="purple.50" borderRadius="md" w="100%">
          <Text fontSize="sm" color="purple.800">
            💡 <strong>useParams en acción:</strong><br/>
            - URL actual: <code>/users/{id}</code><br/>
            - Parámetro extraído: <code>id = "{id}"</code><br/>
            - Tipo de dato: <code>string</code> (siempre)<br/>
            - Convertido a número para buscar en el array
          </Text>
        </Box>
        
        <Button colorScheme="teal" onClick={() => navigate("/users")}>
          ← Volver a usuarios
        </Button>
      </VStack>
    </Box>
  );
}
