import {
  Box,
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'

const BasicComponents = () => {
  const [sliderValue, setSliderValue] = useState(30)
  const [isChecked, setIsChecked] = useState(false)
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "¡Éxito!",
      description: "Este es un mensaje de notificación",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box p={6} bg="gray.50" borderRadius="md">
      <Heading size="lg" mb={6} color="blue.600">
        🎨 Componentes Básicos de Chakra UI
      </Heading>

      <VStack spacing={6} align="stretch">
        {/* Sección de Textos y Títulos */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>📝 Textos y Títulos</Heading>
          <VStack align="start" spacing={2}>
            <Heading size="xl">Título Principal</Heading>
            <Heading size="lg" color="purple.600">Título Secundario</Heading>
            <Text fontSize="lg">Texto grande para destacar información</Text>
            <Text>Texto normal para contenido regular</Text>
            <Text fontSize="sm" color="gray.600">Texto pequeño para notas</Text>
          </VStack>
        </Box>

        {/* Sección de Botones */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>🔘 Botones</Heading>
          <HStack spacing={3} wrap="wrap">
            <Button colorScheme="blue" onClick={showToast}>
              Primario
            </Button>
            <Button colorScheme="green" variant="outline">
              Secundario
            </Button>
            <Button colorScheme="red" variant="ghost">
              Fantasma
            </Button>
            <Button size="sm" colorScheme="purple">
              Pequeño
            </Button>
            <Button size="lg" colorScheme="orange">
              Grande
            </Button>
            <Button isLoading colorScheme="teal">
              Cargando
            </Button>
          </HStack>
        </Box>

        {/* Sección de Badges y Avatar */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>👤 Badges y Avatar</Heading>
          <HStack spacing={4}>
            <Avatar name="María García" src="https://bit.ly/broken-link" />
            <VStack align="start" spacing={1}>
              <HStack>
                <Text fontWeight="bold">María García</Text>
                <Badge colorScheme="green">Activa</Badge>
              </HStack>
              <HStack spacing={2}>
                <Badge variant="outline" colorScheme="blue">Frontend</Badge>
                <Badge variant="solid" colorScheme="purple">React</Badge>
                <Badge variant="subtle" colorScheme="orange">Principiante</Badge>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        {/* Sección de Formularios */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>📋 Formularios</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Nombre completo</FormLabel>
              <Input placeholder="Escribe tu nombre" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Nivel de experiencia</FormLabel>
              <Select placeholder="Selecciona tu nivel">
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </Select>
            </FormControl>

            <HStack spacing={6}>
              <Checkbox 
                isChecked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)}
              >
                Acepto los términos
              </Checkbox>
              <Switch colorScheme="purple">
                Notificaciones
              </Switch>
            </HStack>
          </VStack>
        </Box>

        {/* Sección de Slider */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>🎚️ Controles Deslizantes</Heading>
          <FormControl>
            <FormLabel>Nivel de habilidad: {sliderValue}%</FormLabel>
            <Slider 
              value={sliderValue} 
              onChange={setSliderValue}
              colorScheme="pink"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="pink.500" />
              </SliderThumb>
            </Slider>
          </FormControl>
        </Box>
      </VStack>
    </Box>
  )
}

export default BasicComponents