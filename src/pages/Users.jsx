/**
 * 👥 USERS - Lista de usuarios con cards
 *
 * Conceptos clave:
 *
 * 📌 RUTAS DINÁMICAS (preparado para useParams):
 * - navigate(`/users/${user.id}`): Navega a una ruta dinámica
 * - En la ruta se definiría: <Route path="/users/:id" element={<UserDetail />} />
 * - En UserDetail usarías: const { id } = useParams() para leer el ID
 *
 * 📌 CHAKRA UI - GRID RESPONSIVE:
 * - SimpleGrid: Grid simple y responsive
 * - columns={{ base: 1, md: 2, lg: 3 }}: Columnas según el tamaño de pantalla
 *   * base (móvil): 1 columna
 *   * md (tablet): 2 columnas
 *   * lg (desktop): 3 columnas
 *
 * 📌 CHAKRA UI - CARDS:
 * - Card: Contenedor para contenido agrupado
 * - CardHeader: Encabezado de la tarjeta
 * - CardBody: Contenido principal
 * - CardFooter: Pie de la tarjeta (botones, acciones)
 */

import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  Link as ChakraLink,
  CardBody,
  CardFooter,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { InfoIcon } from "@chakra-ui/icons";

const Users = () => {
  const navigate = useNavigate();

  // Datos de ejemplo (normalmente vendrían de una API)
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com" },
    { id: 2, name: "María García", email: "maria@example.com" },
    { id: 3, name: "Carlos López", email: "carlos@example.com" },
  ];

  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" color="blue.600">
          👥 Lista de Usuarios
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Ejemplo de página con layout Header y Footer
        </Text>

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
              {/* <a href="http://localhost:5173">{user.name}</a> */}
            </ListItem>
          ))}
        </List>

        {/* Grid responsive - Se adapta al tamaño de pantalla */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={4}>
          {users.map((user) => (
            <Card key={user.id} variant="outline">
              <CardHeader>
                <Heading size="md">{user.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text color="gray.600">{user.email}</Text>
              </CardBody>
              <CardFooter>
                {/* Navegación a ruta dinámica - Preparado para useParams */}
                <Button
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<InfoIcon />}
                  onClick={() => navigate(`/users/${user.id}`)}
                >
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Users;
