import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'
import { useState } from 'react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

const InteractiveComponents = () => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
  const [selectedOption, setSelectedOption] = useState('option1')

  return (
    <Box p={6}>
      <Heading size="lg" mb={6} color="purple.600">
        🎯 Componentes Interactivos
      </Heading>

      <VStack spacing={6} align="stretch">
        {/* Modales y Drawers */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>🪟 Modales y Drawers</Heading>
          <HStack spacing={3}>
            <Button colorScheme="blue" onClick={onModalOpen}>
              Abrir Modal
            </Button>
            <Button colorScheme="green" onClick={onDrawerOpen}>
              Abrir Drawer
            </Button>
          </HStack>

          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>¡Bienvenida a Chakra UI! 🎉</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Este es un ejemplo de modal en Chakra UI. Los modales son perfectos para 
                  mostrar información importante o formularios que requieren la atención 
                  completa del usuario.
                </Text>
                <Text mt={3} color="gray.600">
                  💡 <strong>Tip:</strong> Puedes cerrar este modal presionando Escape 
                  o haciendo clic fuera de él.
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onModalClose}>
                  ¡Entendido!
                </Button>
                <Button variant="ghost" onClick={onModalClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Drawer */}
          <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menú de Navegación</DrawerHeader>
              <DrawerBody>
                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold">📚 Secciones del Curso</Text>
                  <Button variant="ghost" justifyContent="start" w="full">
                    Introducción a React
                  </Button>
                  <Button variant="ghost" justifyContent="start" w="full">
                    Componentes y Props
                  </Button>
                  <Button variant="ghost" justifyContent="start" w="full">
                    Estado y Hooks
                  </Button>
                  <Button variant="ghost" justifyContent="start" w="full" bg="purple.50">
                    Chakra UI (actual)
                  </Button>
                  <Button variant="ghost" justifyContent="start" w="full">
                    Proyecto Final
                  </Button>
                </VStack>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onDrawerClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue">Ir a sección</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>

        {/* Tooltips */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>💬 Tooltips</Heading>
          <HStack spacing={4}>
            <Tooltip label="Este botón guarda tu trabajo" placement="top">
              <Button colorScheme="green">
                💾 Guardar
              </Button>
            </Tooltip>
            
            <Tooltip 
              label="Tip: Usa Ctrl+Z para deshacer cambios" 
              placement="bottom"
              bg="purple.500"
            >
              <Button colorScheme="purple">
                ↶ Deshacer
              </Button>
            </Tooltip>
            
            <Tooltip 
              label="¡Cuidado! Esta acción no se puede deshacer" 
              placement="right"
              bg="red.500"
            >
              <Button colorScheme="red">
                🗑️ Eliminar
              </Button>
            </Tooltip>
          </HStack>
        </Box>

        {/* Popover */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>💭 Popover</Heading>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="orange">
                ¿Necesitas ayuda?
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold">Centro de Ayuda 🆘</PopoverHeader>
              <PopoverBody>
                <VStack align="start" spacing={2}>
                  <Text fontSize="sm">
                    • Consulta la documentación oficial
                  </Text>
                  <Text fontSize="sm">
                    • Únete a nuestro grupo de Discord
                  </Text>
                  <Text fontSize="sm">
                    • Revisa ejemplos en CodePen
                  </Text>
                </VStack>
              </PopoverBody>
              <PopoverFooter>
                <Button size="sm" colorScheme="blue">
                  Ver más recursos
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>

        {/* Menús */}
        <Box p={4} bg="white" borderRadius="md" shadow="sm">
          <Heading size="md" mb={3}>📋 Menús</Heading>
          <HStack spacing={3}>
            {/* Menú básico */}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
                Acciones
              </MenuButton>
              <MenuList>
                <MenuItem>📝 Crear nuevo proyecto</MenuItem>
                <MenuItem>📂 Abrir proyecto</MenuItem>
                <MenuItem>💾 Guardar como...</MenuItem>
                <MenuDivider />
                <MenuItem>⚙️ Configuración</MenuItem>
              </MenuList>
            </Menu>

            {/* Menú con opciones */}
            <Menu>
              <MenuButton 
                as={IconButton} 
                icon={<HamburgerIcon />} 
                colorScheme="purple"
                aria-label="Opciones"
              />
              <MenuList>
                <MenuGroup title="Tema">
                  <MenuOptionGroup 
                    value={selectedOption} 
                    type="radio"
                    onChange={setSelectedOption}
                  >
                    <MenuItemOption value="light">🌞 Claro</MenuItemOption>
                    <MenuItemOption value="dark">🌙 Oscuro</MenuItemOption>
                    <MenuItemOption value="auto">🔄 Automático</MenuItemOption>
                  </MenuOptionGroup>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Idioma">
                  <MenuItem>🇪🇸 Español</MenuItem>
                  <MenuItem>🇺🇸 English</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
          <Text mt={2} fontSize="sm" color="gray.600">
            Opción seleccionada: <strong>{selectedOption}</strong>
          </Text>
        </Box>

        {/* Tips para principiantes */}
        <Box p={4} bg="blue.50" borderRadius="md" border="1px solid" borderColor="blue.200">
          <Heading size="sm" mb={2} color="blue.700">
            💡 Tips para Principiantes
          </Heading>
          <VStack align="start" spacing={1} fontSize="sm">
            <Text>• Los modales bloquean la interacción con el resto de la página</Text>
            <Text>• Los drawers son ideales para menús de navegación en móviles</Text>
            <Text>• Los tooltips mejoran la experiencia del usuario</Text>
            <Text>• Los popovers pueden mostrar información detallada sin cambiar de página</Text>
            <Text>• Los menús organizan acciones y opciones de manera limpia</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default InteractiveComponents