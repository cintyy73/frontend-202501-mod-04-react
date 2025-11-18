import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Spacer,
  Badge,
  Divider,
  Image,
  Link,
  Code,
  Kbd
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const BasicComponents = () => {
  return (
    <Box p={6}>
      <Heading size="xl" mb={6} textAlign="center" color="blue.600">
        🔧 Componentes Básicos de Chakra UI
      </Heading>

      <VStack spacing={8} align="stretch">
        {/* Textos y Títulos */}
        <Box p={6} bg="blue.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="blue.700">
            📝 Textos y Títulos
          </Heading>
          <VStack spacing={4} align="start">
            <Heading size="2xl">Título Extra Grande</Heading>
            <Heading size="xl">Título Grande</Heading>
            <Heading size="lg">Título Mediano</Heading>
            <Heading size="md">Título Normal</Heading>
            <Heading size="sm">Título Pequeño</Heading>
            <Text fontSize="lg">Texto grande</Text>
            <Text>Texto normal</Text>
            <Text fontSize="sm" color="gray.600">Texto pequeño</Text>
            <Text as="em">Texto en cursiva</Text>
            <Text as="strong">Texto en negrita</Text>
          </VStack>
        </Box>

        {/* Botones */}
        <Box p={6} bg="green.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="green.700">
            🎯 Botones
          </Heading>
          <VStack spacing={4} align="start">
            <HStack spacing={4} flexWrap="wrap">
              <Button colorScheme="blue">Botón Azul</Button>
              <Button colorScheme="green">Botón Verde</Button>
              <Button colorScheme="red">Botón Rojo</Button>
              <Button colorScheme="purple">Botón Morado</Button>
            </HStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button size="xs">Extra Pequeño</Button>
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">Grande</Button>
            </HStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button variant="solid">Sólido</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </HStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button isLoading>Cargando</Button>
              <Button isDisabled>Deshabilitado</Button>
              <Button leftIcon={<ExternalLinkIcon />}>Con Icono</Button>
            </HStack>
          </VStack>
        </Box>

        {/* Badges y elementos decorativos */}
        <Box p={6} bg="purple.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="purple.700">
            🏷️ Badges y Elementos Decorativos
          </Heading>
          <VStack spacing={4} align="start">
            <HStack spacing={3} flexWrap="wrap">
              <Badge>Default</Badge>
              <Badge colorScheme="green">Exitoso</Badge>
              <Badge colorScheme="red">Error</Badge>
              <Badge colorScheme="yellow">Advertencia</Badge>
              <Badge colorScheme="blue">Info</Badge>
            </HStack>
            
            <Divider my={4} />
            
            <HStack spacing={4}>
              <Text>Presiona:</Text>
              <Kbd>Ctrl</Kbd>
              <Text>+</Text>
              <Kbd>C</Kbd>
              <Text>para copiar</Text>
            </HStack>
            
            <Box>
              <Text mb={2}>Ejemplo de código:</Text>
              <Code p={2} borderRadius="md" display="block">
                const saludo = "¡Hola mundo!"
              </Code>
            </Box>
          </VStack>
        </Box>

        {/* Enlaces e imágenes */}
        <Box p={6} bg="teal.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="teal.700">
            🔗 Enlaces e Imágenes
          </Heading>
          <VStack spacing={4} align="start">
            <HStack spacing={4}>
              <Link color="blue.500" href="https://chakra-ui.com" isExternal>
                Documentación de Chakra UI <ExternalLinkIcon mx="2px" />
              </Link>
              <Link color="green.500">
                Enlace interno
              </Link>
            </HStack>
            
            <Box>
              <Text mb={2}>Imagen de ejemplo:</Text>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                fallbackSrc="https://via.placeholder.com/100"
              />
            </Box>
          </VStack>
        </Box>

        {/* Layout básico */}
        <Box p={6} bg="orange.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="orange.700">
            📐 Layout Básico
          </Heading>
          <VStack spacing={4}>
            <Box w="full">
              <Text mb={2} fontWeight="bold">HStack (horizontal):</Text>
              <HStack bg="white" p={4} borderRadius="md" border="1px solid" borderColor="gray.200">
                <Box bg="blue.100" p={2} borderRadius="md">Item 1</Box>
                <Box bg="green.100" p={2} borderRadius="md">Item 2</Box>
                <Spacer />
                <Box bg="purple.100" p={2} borderRadius="md">Item 3</Box>
              </HStack>
            </Box>
            
            <Box w="full">
              <Text mb={2} fontWeight="bold">VStack (vertical):</Text>
              <VStack bg="white" p={4} borderRadius="md" border="1px solid" borderColor="gray.200" spacing={2}>
                <Box bg="red.100" p={2} borderRadius="md" w="full" textAlign="center">Item A</Box>
                <Box bg="yellow.100" p={2} borderRadius="md" w="full" textAlign="center">Item B</Box>
                <Box bg="cyan.100" p={2} borderRadius="md" w="full" textAlign="center">Item C</Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default BasicComponents