import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
  Spinner,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Flex,
  Spacer,
  Center,
  Square,
  Circle,
  useToast,
  Button
} from '@chakra-ui/react'

const LayoutAndFeedback = () => {
  const toast = useToast()

  const showToast = (status) => {
    toast({
      title: `Notificación ${status}`,
      description: `Este es un mensaje de tipo ${status}`,
      status: status,
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box p={6}>
      <Heading size="xl" mb={6} textAlign="center" color="green.600">
        📐 Layout y Feedback
      </Heading>

      <VStack spacing={8} align="stretch">
        {/* Alerts */}
        <Box p={6} bg="red.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="red.700">
            🚨 Alertas y Notificaciones
          </Heading>
          <VStack spacing={4}>
            <Alert status="error">
              <AlertIcon />
              <Box>
                <AlertTitle>¡Error!</AlertTitle>
                <AlertDescription>
                  Algo salió mal. Por favor, inténtalo de nuevo.
                </AlertDescription>
              </Box>
            </Alert>

            <Alert status="warning">
              <AlertIcon />
              <Box>
                <AlertTitle>Advertencia</AlertTitle>
                <AlertDescription>
                  Ten cuidado con esta acción.
                </AlertDescription>
              </Box>
            </Alert>

            <Alert status="success">
              <AlertIcon />
              <Box>
                <AlertTitle>¡Éxito!</AlertTitle>
                <AlertDescription>
                  La operación se completó correctamente.
                </AlertDescription>
              </Box>
            </Alert>

            <Alert status="info">
              <AlertIcon />
              <Box>
                <AlertTitle>Información</AlertTitle>
                <AlertDescription>
                  Aquí tienes información importante.
                </AlertDescription>
              </Box>
            </Alert>

            <HStack spacing={4} mt={4}>
              <Button onClick={() => showToast('success')} colorScheme="green" size="sm">
                Toast Éxito
              </Button>
              <Button onClick={() => showToast('error')} colorScheme="red" size="sm">
                Toast Error
              </Button>
              <Button onClick={() => showToast('warning')} colorScheme="yellow" size="sm">
                Toast Advertencia
              </Button>
              <Button onClick={() => showToast('info')} colorScheme="blue" size="sm">
                Toast Info
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Progress y Loading */}
        <Box p={6} bg="blue.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="blue.700">
            ⏳ Indicadores de Progreso
          </Heading>
          <VStack spacing={6}>
            <Box w="full">
              <Text mb={2} fontWeight="bold">Barra de progreso:</Text>
              <Progress value={80} colorScheme="green" size="lg" />
              <Text fontSize="sm" color="gray.600" mt={1}>80% completado</Text>
            </Box>

            <Box w="full">
              <Text mb={2} fontWeight="bold">Progreso animado:</Text>
              <Progress size="md" isIndeterminate colorScheme="purple" />
            </Box>

            <HStack spacing={8}>
              <Box textAlign="center">
                <Text mb={2} fontWeight="bold">Spinner pequeño:</Text>
                <Spinner size="sm" color="blue.500" />
              </Box>
              <Box textAlign="center">
                <Text mb={2} fontWeight="bold">Spinner mediano:</Text>
                <Spinner size="md" color="green.500" />
              </Box>
              <Box textAlign="center">
                <Text mb={2} fontWeight="bold">Spinner grande:</Text>
                <Spinner size="lg" color="purple.500" />
              </Box>
            </HStack>

            <Box w="full">
              <Text mb={2} fontWeight="bold">Skeleton (carga de contenido):</Text>
              <Stack spacing={3}>
                <HStack>
                  <SkeletonCircle size="10" />
                  <SkeletonText noOfLines={2} spacing={2} />
                </HStack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="15px" />
              </Stack>
            </Box>
          </VStack>
        </Box>

        {/* Grid Layout */}
        <Box p={6} bg="purple.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="purple.700">
            🎯 Layouts con Grid
          </Heading>
          <VStack spacing={6}>
            <Box w="full">
              <Text mb={4} fontWeight="bold">Grid Responsivo:</Text>
              <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                <Box bg="blue.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Columna 1</Text>
                </Box>
                <Box bg="green.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Columna 2</Text>
                </Box>
                <Box bg="purple.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Columna 3</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box w="full">
              <Text mb={4} fontWeight="bold">Grid Personalizado:</Text>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem colSpan={2} bg="red.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Span 2 columnas</Text>
                </GridItem>
                <GridItem bg="yellow.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Col 1</Text>
                </GridItem>
                <GridItem bg="cyan.100" p={4} borderRadius="md" textAlign="center">
                  <Text>Col 1</Text>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </Box>

        {/* Flex Layout */}
        <Box p={6} bg="teal.50" borderRadius="lg">
          <Heading size="lg" mb={4} color="teal.700">
            🧩 Layouts con Flex
          </Heading>
          <VStack spacing={6}>
            <Box w="full">
              <Text mb={2} fontWeight="bold">Flex con Spacer:</Text>
              <Flex bg="white" p={4} borderRadius="md" border="1px solid" borderColor="gray.200">
                <Box bg="blue.100" p={2} borderRadius="md">Inicio</Box>
                <Spacer />
                <Box bg="green.100" p={2} borderRadius="md">Final</Box>
              </Flex>
            </Box>

            <HStack spacing={4} w="full">
              <Center w="100px" h="100px" bg="blue.100" borderRadius="md">
                <Text textAlign="center">Center</Text>
              </Center>
              <Square size="100px" bg="green.100" borderRadius="md">
                <Text>Square</Text>
              </Square>
              <Circle size="100px" bg="purple.100">
                <Text>Circle</Text>
              </Circle>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default LayoutAndFeedback