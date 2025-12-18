/**
 * 🧭 HOME - Navegación Imperativa con useNavigate
 * 
 * Conceptos clave:
 * - useNavigate permite navegar programáticamente
 * - Útil para redirigir después de acciones (login, submit, etc.)
 * - Diferencia con Link: useNavigate es para lógica, Link para UI
 * 
 * ¿Cuándo usar useNavigate?
 * ✅ Después de enviar un formulario
 * ✅ Después de hacer login
 * ✅ En respuesta a eventos (onClick, setTimeout, etc.)
 * ✅ Cuando necesitas navegar condicionalmente
 */

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // 🎯 useNavigate retorna una función para navegar
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        🏠 Home
      </Heading>
      <Text fontSize="xl" mb={6}>
        Bienvenida a la página principal
      </Text>
      
      {/* 👉 navigate() cambia la URL sin recargar la página */}
      <Button colorScheme="teal" onClick={() => navigate("/about")}>
        Ir a About
      </Button>
      
      <Box mt={8} p={4} bg="gray.50" borderRadius="md">
        <Text fontSize="sm" color="gray.600">
          💡 Este botón usa <strong>useNavigate()</strong> para navegar programáticamente
        </Text>
      </Box>
    </Box>
  );
}
