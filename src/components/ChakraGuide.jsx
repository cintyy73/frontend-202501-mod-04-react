import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Code,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Spacer
} from '@chakra-ui/react'
import { CheckIcon, StarIcon } from '@chakra-ui/icons'

const ChakraGuide = () => {
  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading size="xl" mb={6} textAlign="center" color="purple.600">
        📚 Guía de Chakra UI para Principiantes
      </Heading>

      <VStack spacing={8} align="stretch">
        {/* Introducción */}
        <Box p={6} bg="purple.50" borderRadius="lg" border="1px solid" borderColor="purple.200">
          <Heading size="lg" mb={4} color="purple.700">
            ¡Bienvenida a Chakra UI! 🎉
          </Heading>
          <Text mb={4}>
            Chakra UI es una biblioteca de componentes para React que te permite crear 
            interfaces hermosas y accesibles de manera muy sencilla. Aquí tienes una 
            guía rápida para empezar.
          </Text>
          <Text fontWeight="bold" color="purple.600">
            💡 Todo lo que necesitas saber está en esta página
          </Text>
        </Box>

        {/* ¿Por qué Chakra UI? */}
        <Box>
          <Heading size="md" mb={4} color="blue.600">
            🌟 ¿Por qué elegir Chakra UI?
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              <strong>Fácil de usar:</strong> No necesitas escribir CSS, todo se hace con props
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              <strong>Responsive:</strong> Funciona perfecto en móviles, tablets y desktop
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              <strong>Accesible:</strong> Componentes que funcionan con lectores de pantalla
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              <strong>Consistente:</strong> Sistema de colores y espaciado unificado
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              <strong>Personalizable:</strong> Cambia temas y estilos fácilmente
            </ListItem>
          </List>
        </Box>

        <Divider />

        {/* Conceptos Básicos */}
        <Box>
          <Heading size="md" mb={4} color="green.600">
            📖 Conceptos Básicos que Debes Conocer
          </Heading>
          
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="green.50" borderRadius="md">
              <Heading size="sm" mb={2}>1. Props para Estilos</Heading>
              <Text mb={2}>En lugar de CSS, usas props para dar estilos:</Text>
              <Code display="block" p={2} borderRadius="md">
                {`<Box bg="blue.500" p={4} borderRadius="md">
  Contenido
</Box>`}
              </Code>
            </Box>

            <Box p={4} bg="blue.50" borderRadius="md">
              <Heading size="sm" mb={2}>2. Sistema de Colores</Heading>
              <Text mb={2}>Chakra tiene colores predefinidos con intensidades del 50 al 900:</Text>
              <HStack spacing={2} flexWrap="wrap">
                <Code>blue.100</Code>
                <Code>green.500</Code>
                <Code>purple.600</Code>
                <Code>red.400</Code>
                <Code>gray.200</Code>
              </HStack>
            </Box>

            <Box p={4} bg="orange.50" borderRadius="md">
              <Heading size="sm" mb={2}>3. Espaciado</Heading>
              <Text mb={2}>Usa números para márgenes y padding:</Text>
              <UnorderedList spacing={1}>
                <ListItem><Code>p={2}</Code> = padding pequeño</ListItem>
                <ListItem><Code>m={4}</Code> = margin medio</ListItem>
                <ListItem><Code>pt={6}</Code> = padding-top grande</ListItem>
                <ListItem><Code>mx={8}</Code> = margin horizontal muy grande</ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>

        <Divider />

        {/* Componentes Esenciales */}
        <Box>
          <Heading size="md" mb={4} color="teal.600">
            🔧 Componentes que Más Vas a Usar
          </Heading>
          
          <OrderedList spacing={3}>
            <ListItem>
              <strong>Box:</strong> Como un div, pero con superpoderes
              <Code display="block" mt={1} p={2}>
                {`<Box bg="gray.100" p={4}>Contenido</Box>`}
              </Code>
            </ListItem>
            
            <ListItem>
              <strong>Text y Heading:</strong> Para textos y títulos
              <Code display="block" mt={1} p={2}>
                {`<Heading size="lg">Mi Título</Heading>
<Text fontSize="sm">Mi texto</Text>`}
              </Code>
            </ListItem>
            
            <ListItem>
              <strong>Button:</strong> Botones hermosos y accesibles
              <Code display="block" mt={1} p={2}>
                {`<Button colorScheme="blue" size="lg">
  Hacer clic
</Button>`}
              </Code>
            </ListItem>
            
            <ListItem>
              <strong>VStack y HStack:</strong> Para organizar elementos
              <Code display="block" mt={1} p={2}>
                {`<VStack spacing={4}>  // Vertical
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</VStack>`}
              </Code>
            </ListItem>
            
            <ListItem>
              <strong>Input y FormControl:</strong> Para formularios
              <Code display="block" mt={1} p={2}>
                {`<FormControl>
  <FormLabel>Nombre</FormLabel>
  <Input placeholder="Tu nombre" />
</FormControl>`}
              </Code>
            </ListItem>
          </OrderedList>
        </Box>

        <Divider />

        {/* Tips Prácticos */}
        <Box>
          <Heading size="md" mb={4} color="red.600">
            💡 Tips Prácticos para Empezar
          </Heading>
          
          <VStack spacing={3} align="stretch">
            <Box p={3} bg="yellow.50" borderRadius="md" borderLeft="4px solid" borderColor="yellow.400">
              <Text><strong>Tip 1:</strong> Siempre envuelve tu app en <Code>{`<ChakraProvider>`}</Code></Text>
            </Box>
            
            <Box p={3} bg="cyan.50" borderRadius="md" borderLeft="4px solid" borderColor="cyan.400">
              <Text><strong>Tip 2:</strong> Usa <Code>spacing</Code> en Stack para separar elementos uniformemente</Text>
            </Box>
            
            <Box p={3} bg="pink.50" borderRadius="md" borderLeft="4px solid" borderColor="pink.400">
              <Text><strong>Tip 3:</strong> <Code>colorScheme</Code> cambia el color de todo el componente</Text>
            </Box>
            
            <Box p={3} bg="green.50" borderRadius="md" borderLeft="4px solid" borderColor="green.400">
              <Text><strong>Tip 4:</strong> Usa las herramientas de desarrollo para inspeccionar los estilos</Text>
            </Box>
          </VStack>
        </Box>

        {/* Recursos */}
        <Box p={6} bg="gray.50" borderRadius="lg">
          <Heading size="md" mb={4} textAlign="center">
            📚 Recursos Útiles
          </Heading>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Text>🌐 <strong>Docs oficiales:</strong> chakra-ui.com</Text>
            <Text>🎨 <strong>Colores:</strong> chakra-ui.com/docs/theming/theme</Text>
          </HStack>
          <HStack mt={2} spacing={4} justify="center" flexWrap="wrap">
            <Text>📱 <strong>Responsive:</strong> chakra-ui.com/docs/styled-system/responsive-styles</Text>
          </HStack>
        </Box>

        {/* Mensaje Final */}
        <Box textAlign="center" p={6}>
          <Heading size="lg" mb={2}>
            ¡Ya estás lista para crear interfaces increíbles! 🚀
          </Heading>
          <Text color="gray.600">
            Explora los componentes de ejemplo en esta aplicación y experimenta con diferentes props
          </Text>
          <HStack justify="center" mt={4}>
            <StarIcon color="yellow.400" />
            <Text fontWeight="bold" color="purple.600">¡A programar se ha dicho!</Text>
            <StarIcon color="yellow.400" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default ChakraGuide