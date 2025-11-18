import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  HStack,
  useColorMode,
  Icon,
  Tooltip,
  Spinner,
  Progress,
  Divider,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSun, FaMoon, FaInfoCircle, FaTrash } from 'react-icons/fa';

const InteractiveComponents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tags, setTags] = useState(['React', 'Chakra UI', 'JavaScript', 'Frontend']);

  const handleLoadingDemo = () => {
    setLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Box p={6} maxW="xl" mx="auto">
      <VStack spacing={6} align="stretch">
        
        {/* Modal Example */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Modal (Ventana emergente)</Text>
          <Button onClick={onOpen} colorScheme="purple">
            Abrir Modal
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>¡Ejemplo de Modal!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Los modales son útiles para mostrar información importante
                  o formularios sin salir de la página actual.
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Cerrar
                </Button>
                <Button variant="ghost">Acción secundaria</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        <Divider />

        {/* Color Mode Toggle */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Modo oscuro/claro</Text>
          <HStack>
            <Button onClick={toggleColorMode} leftIcon={<Icon as={colorMode === 'light' ? FaMoon : FaSun} />}>
              Cambiar a modo {colorMode === 'light' ? 'oscuro' : 'claro'}
            </Button>
            <Tooltip label="Cambia entre tema claro y oscuro" hasArrow>
              <Box>
                <Icon as={FaInfoCircle} color="gray.500" />
              </Box>
            </Tooltip>
          </HStack>
        </Box>

        <Divider />

        {/* Loading & Progress */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Loading y Progress</Text>
          <VStack spacing={3} align="stretch">
            <HStack>
              <Button
                onClick={handleLoadingDemo}
                isLoading={loading}
                loadingText="Cargando..."
                colorScheme="teal"
              >
                Simular carga
              </Button>
              <Spinner size="md" color="teal.500" />
            </HStack>
            
            {loading && (
              <Box>
                <Text fontSize="sm" mb={2}>Progreso: {progress}%</Text>
                <Progress value={progress} colorScheme="teal" hasStripe isAnimated />
              </Box>
            )}
          </VStack>
        </Box>

        <Divider />

        {/* Tags */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Tags dinámicos</Text>
          <Wrap>
            {tags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag
                  size="lg"
                  colorScheme="blue"
                  borderRadius="full"
                  variant="solid"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(tag)} />
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          {tags.length === 0 && (
            <Text color="gray.500" fontStyle="italic">
              No hay tags. ¡Prueba eliminar algunos!
            </Text>
          )}
        </Box>

        <Divider />

        {/* Tooltips */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Tooltips informativos</Text>
          <HStack spacing={4}>
            <Tooltip label="¡Información útil!" hasArrow placement="top">
              <Button>Hover aquí</Button>
            </Tooltip>
            
            <Tooltip 
              label="Los tooltips ayudan a explicar funcionalidades" 
              hasArrow 
              placement="right"
              bg="purple.600"
              color="white"
            >
              <Button colorScheme="purple">Tooltip personalizado</Button>
            </Tooltip>
          </HStack>
        </Box>

      </VStack>
    </Box>
  );
};

export default InteractiveComponents;