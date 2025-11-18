import { 
  Container, 
  HStack, 
  Text, 
  VStack, 
  Alert as AlertChakra,
  Heading,
  SimpleGrid,
  Box,
  Divider,
  Badge,
  useColorModeValue
} from "@chakra-ui/react";
import Card from "./components/Card";
import Alert from "./components/Alert";
import FormExample from "./components/FormExample";
import InteractiveComponents from "./components/InteractiveComponents";

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  return (
    <Box minH="100vh" bg={bgColor} py={8}>
      <Container maxW="container.xl">
        
        {/* Header */}
        <VStack spacing={6} mb={10} textAlign="center">
          <Heading as="h1" size="2xl" color="teal.500">
            Ejemplos de Chakra UI v2
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            Colección de componentes básicos para aprender Chakra UI. 
            Perfecto para estudiantes que usan la librería por primera vez.
          </Text>
          <Badge colorScheme="green" fontSize="md" px={3} py={1} borderRadius="full">
            Chakra UI v2 + React + Vite
          </Badge>
        </VStack>

        {/* Alerts Section */}
        <Box mb={10}>
          <Heading as="h2" size="lg" mb={4} color="blue.600">
            📢 Alertas y Notificaciones
          </Heading>
          <VStack spacing={4}>
            <Alert 
              status="success" 
              title="¡Éxito!" 
              description="Esta es una alerta de éxito. Perfecta para confirmaciones."
            />
            <AlertChakra 
              status="warning" 
              title="Advertencia" 
              description="Esta alerta te avisa sobre algo importante."
            />
            <Alert 
              status="error" 
              title="Error" 
              description="Algo salió mal. Esta alerta muestra errores."
            />
            <Alert 
              status="info" 
              title="Información" 
              description="Esta es información general para el usuario."
              isClosable={false}
            />
          </VStack>
        </Box>

        <Divider my={8} />

        {/* Layout Examples */}
        <Box mb={10}>
          <Heading as="h2" size="lg" mb={4} color="purple.600">
            📐 Layouts: HStack y VStack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box p={4} borderWidth={1} borderRadius="md" bg="white">
              <Text fontSize="md" fontWeight="bold" mb={3} color="gray.700">
                HStack (Horizontal)
              </Text>
              <HStack spacing={4}>
                <Text bg="teal.100" p={2} borderRadius="md">1</Text>
                <Text bg="blue.100" p={2} borderRadius="md">2</Text>
                <Text bg="purple.100" p={2} borderRadius="md">3</Text>
                <Text bg="pink.100" p={2} borderRadius="md">4</Text>
              </HStack>
            </Box>
            
            <Box p={4} borderWidth={1} borderRadius="md" bg="white">
              <Text fontSize="md" fontWeight="bold" mb={3} color="gray.700">
                VStack (Vertical)
              </Text>
              <VStack spacing={2} align="stretch">
                <Text bg="red.100" p={2} borderRadius="md" textAlign="center">1</Text>
                <Text bg="orange.100" p={2} borderRadius="md" textAlign="center">2</Text>
                <Text bg="yellow.100" p={2} borderRadius="md" textAlign="center">3</Text>
                <Text bg="green.100" p={2} borderRadius="md" textAlign="center">4</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Cards Section */}
        <Box mb={10}>
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            🎴 Tarjetas de Producto
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            <Card 
              title="iPhone 15 Pro"
              price="$999.99"
              category="Smartphones"
              imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop"
            />
            <Card 
              title="MacBook Air M2"
              price="$1,199.00"
              category="Laptops"
              imageUrl="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop"
            />
            <Card 
              title="iPad Pro"
              price="$799.99"
              category="Tablets"
              imageUrl="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop"
            />
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Interactive Components */}
        <Box mb={10}>
          <Heading as="h2" size="lg" mb={4} color="orange.600">
            ⚡ Componentes Interactivos
          </Heading>
          <InteractiveComponents />
        </Box>

        <Divider my={8} />

        {/* Form Example */}
        <Box mb={10}>
          <Heading as="h2" size="lg" mb={4} color="green.600">
            📝 Formulario Completo
          </Heading>
          <FormExample />
        </Box>

        {/* Footer */}
        <Box textAlign="center" py={6} borderTop="1px" borderColor="gray.200" mt={10}>
          <Text color="gray.500">
            💡 Tip: Explora cada componente y modifica las props para ver cómo cambian.
          </Text>
          <Text color="gray.400" fontSize="sm" mt={2}>
            Hecho con ❤️ usando Chakra UI v2, React y Vite
          </Text>
        </Box>

      </Container>
    </Box>
  );
}

export default App;
