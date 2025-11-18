import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
  Progress,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

const LayoutAndFeedback = () => {
  return (
    <Box p={6}>
      <Heading size="lg" mb={6} color="teal.600">
        📐 Layout y Feedback de Chakra UI
      </Heading>

      <Stack spacing={6}>
        {/* Grid Layout */}
        <Box>
          <Heading size="md" mb={3}>🔲 Grid Layout</Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem bg="blue.100" p={4} borderRadius="md">
              <Text textAlign="center" fontWeight="bold">Columna 1</Text>
            </GridItem>
            <GridItem bg="green.100" p={4} borderRadius="md">
              <Text textAlign="center" fontWeight="bold">Columna 2</Text>
            </GridItem>
            <GridItem bg="purple.100" p={4} borderRadius="md">
              <Text textAlign="center" fontWeight="bold">Columna 3</Text>
            </GridItem>
          </Grid>
        </Box>

        {/* Tags */}
        <Box>
          <Heading size="md" mb={3}>🏷️ Tags</Heading>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Tag size="md" colorScheme="blue">
              <TagLabel>JavaScript</TagLabel>
            </Tag>
            <Tag size="md" colorScheme="green">
              <TagLabel>React</TagLabel>
              <TagCloseButton />
            </Tag>
            <Tag size="md" colorScheme="purple">
              <TagLabel>Chakra UI</TagLabel>
              <TagCloseButton />
            </Tag>
            <Tag size="md" colorScheme="orange">
              <TagLabel>Frontend</TagLabel>
            </Tag>
          </Stack>
        </Box>

        {/* Progress y Spinners */}
        <Box>
          <Heading size="md" mb={3}>⏳ Progress y Loading</Heading>
          <Stack spacing={3}>
            <Box>
              <Text mb={2}>Progreso del curso: 65%</Text>
              <Progress value={65} colorScheme="green" size="lg" />
            </Box>
            <Box>
              <Text mb={2}>Carga de datos:</Text>
              <Progress size="sm" isIndeterminate colorScheme="blue" />
            </Box>
            <Stack direction="row" spacing={4} align="center">
              <Spinner size="sm" color="blue.500" />
              <Spinner size="md" color="green.500" />
              <Spinner size="lg" color="purple.500" />
              <Text>Cargando...</Text>
            </Stack>
          </Stack>
        </Box>

        {/* Alerts */}
        <Box>
          <Heading size="md" mb={3}>⚠️ Alertas</Heading>
          <Stack spacing={3}>
            <Alert status="success" borderRadius="md">
              <AlertIcon />
              <AlertTitle>¡Perfecto!</AlertTitle>
              <AlertDescription>Tu código se ejecutó correctamente.</AlertDescription>
            </Alert>
            
            <Alert status="warning" borderRadius="md">
              <AlertIcon />
              <AlertTitle>Atención</AlertTitle>
              <AlertDescription>Revisa tu sintaxis antes de continuar.</AlertDescription>
            </Alert>
            
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>No se pudo conectar al servidor.</AlertDescription>
            </Alert>
            
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              <AlertDescription>💡 Tip: Puedes usar Ctrl+S para guardar rápidamente.</AlertDescription>
            </Alert>
          </Stack>
        </Box>

        {/* Breadcrumbs */}
        <Box>
          <Heading size="md" mb={3}>🍞 Breadcrumbs</Heading>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Cursos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">React</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Chakra UI</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Accordion */}
        <Box>
          <Heading size="md" mb={3}>📂 Accordion</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">¿Qué es Chakra UI?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text>
                  Chakra UI es una biblioteca de componentes de React que te permite 
                  crear interfaces de usuario modernas y accesibles de manera rápida y sencilla.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">¿Cómo instalar Chakra UI?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text>
                  Puedes instalar Chakra UI usando npm o yarn:
                </Text>
                <Text mt={2} fontFamily="mono" bg="gray.100" p={2} borderRadius="md">
                  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">¿Por qué usar Chakra UI?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack spacing={2}>
                  <Text>• Componentes accesibles por defecto</Text>
                  <Text>• Sistema de diseño consistente</Text>
                  <Text>• Fácil personalización</Text>
                  <Text>• Excelente documentación</Text>
                  <Text>• Comunidad activa</Text>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  )
}

export default LayoutAndFeedback