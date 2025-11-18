# 🎨 Ejemplos de Chakra UI v2 - Guía Completa

Una aplicación de ejemplo con componentes de **Chakra UI v2** diseñada para estudiantes que están aprendiendo React y quieren dominar esta poderosa biblioteca de componentes.

## 📋 Tabla de Contenidos

- [¿Qué es Chakra UI?](#-qué-es-chakra-ui)
- [Instalación](#-instalación)
- [Configuración Inicial](#-configuración-inicial)
- [Ejemplos de Uso](#-ejemplos-de-uso)
- [Componentes Incluidos](#-componentes-incluidos)
- [Buenas Prácticas](#-buenas-prácticas)
- [Enlaces Útiles](#-enlaces-útiles)
- [Recursos Adicionales](#-recursos-adicionales)

## 🌟 ¿Qué es Chakra UI?

**Chakra UI** es una biblioteca de componentes para React que te permite crear interfaces de usuario modernas, accesibles y responsive de manera rápida y sencilla. Es perfecta para principiantes porque:

- ✅ **No necesitas escribir CSS** - Todo se hace con props
- ✅ **Componentes accesibles** por defecto
- ✅ **Responsive design** automático
- ✅ **Sistema de diseño consistente**
- ✅ **Fácil personalización**

## 🚀 Instalación

### Paso 1: Crear un proyecto de React (si no lo tienes)

```bash
# Con Vite (recomendado - más rápido)
npm create vite@latest mi-proyecto-chakra -- --template react
cd mi-proyecto-chakra
npm install

# O con Create React App
npx create-react-app mi-proyecto-chakra
cd mi-proyecto-chakra
```

### Paso 2: Instalar Chakra UI y sus dependencias

```bash
# Con npm
npm install @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion

# Con yarn
yarn add @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion

# Con pnpm
pnpm add @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
```

### Paso 3: Instalar iconos (opcional pero recomendado)

```bash
# Con npm
npm install @chakra-ui/icons

# Con yarn
yarn add @chakra-ui/icons
```

## ⚙️ Configuración Inicial

### 1. Configurar el ChakraProvider

Edita tu archivo `src/main.jsx`

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
```

### 2. Tu primer componente con Chakra UI

Edita `src/App.jsx`:

```jsx
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  VStack 
} from "@chakra-ui/react";

function App() {
  return (
    <Box p={8}>
      <VStack spacing={4}>
        <Heading color="purple.600">
          ¡Hola Chakra UI! 🎉
        </Heading>
        <Text fontSize="lg">
          Mi primera aplicación con Chakra UI
        </Text>
        <Button colorScheme="blue" size="lg">
          ¡Funciona! 🚀
        </Button>
      </VStack>
    </Box>
  );
}

export default App;
```

### 3. Ejecutar la aplicación

```bash
# Con npm
npm run dev

# Con yarn
yarn dev
```

Visita `http://localhost:5173` (Vite) 

## 💡 Ejemplos de Uso

### Ejemplo Básico: Layout con Box y Stack

```jsx
import { Box, VStack, HStack, Text } from "@chakra-ui/react";

function Layout() {
  return (
    <Box p={6} bg="gray.50" borderRadius="md">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Layout Vertical
        </Text>
        <HStack spacing={6}>
          <Box bg="blue.500" color="white" p={4} borderRadius="md">
            Caja 1
          </Box>
          <Box bg="green.500" color="white" p={4} borderRadius="md">
            Caja 2
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
```

### Ejemplo de Formulario

```jsx
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "¡Formulario enviado!",
      description: `Hola ${name}`,
      status: "success",
      duration: 3000,
    });
  };

  return (
    <VStack spacing={4} maxW="400px">
      <FormControl>
        <FormLabel>Tu nombre</FormLabel>
        <Input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Enviar
      </Button>
    </VStack>
  );
}
```

### Ejemplo de Modal

```jsx
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

function MyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="purple">
        Abrir Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mi Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¡Este es el contenido del modal! 🎉
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## 🧩 Componentes Incluidos

Esta aplicación incluye ejemplos de:

### Layout y Contenedores
- **[Box](https://chakra-ui.com/docs/components/box)** - Contenedor básico (como div)
- **[Stack](https://chakra-ui.com/docs/components/stack)** - VStack, HStack para layouts
- **[Grid](https://chakra-ui.com/docs/components/grid)** - Sistema de grillas
- **[Container](https://chakra-ui.com/docs/components/container)** - Contenedor responsive

### Tipografía
- **[Heading](https://chakra-ui.com/docs/components/heading)** - Títulos y subtítulos
- **[Text](https://chakra-ui.com/docs/components/text)** - Texto con estilos

### Formularios
- **[Input](https://chakra-ui.com/docs/components/input)** - Campos de entrada
- **[Select](https://chakra-ui.com/docs/components/select)** - Listas desplegables
- **[Checkbox](https://chakra-ui.com/docs/components/checkbox)** - Casillas de verificación
- **[Switch](https://chakra-ui.com/docs/components/switch)** - Interruptores
- **[Slider](https://chakra-ui.com/docs/components/slider)** - Controles deslizantes
- **[FormControl](https://chakra-ui.com/docs/components/form-control)** - Contenedor de formularios

### Botones y Navegación
- **[Button](https://chakra-ui.com/docs/components/button)** - Botones interactivos
- **[IconButton](https://chakra-ui.com/docs/components/icon-button)** - Botones con iconos
- **[Menu](https://chakra-ui.com/docs/components/menu)** - Menús desplegables
- **[Tabs](https://chakra-ui.com/docs/components/tabs)** - Navegación por pestañas
- **[Breadcrumb](https://chakra-ui.com/docs/components/breadcrumb)** - Navegación jerárquica

### Feedback y Estados
- **[Alert](https://chakra-ui.com/docs/components/alert)** - Mensajes de estado
- **[Toast](https://chakra-ui.com/docs/components/toast)** - Notificaciones temporales
- **[Progress](https://chakra-ui.com/docs/components/progress)** - Barras de progreso
- **[Spinner](https://chakra-ui.com/docs/components/spinner)** - Indicadores de carga

### Overlays
- **[Modal](https://chakra-ui.com/docs/components/modal)** - Ventanas modales
- **[Drawer](https://chakra-ui.com/docs/components/drawer)** - Paneles laterales
- **[Popover](https://chakra-ui.com/docs/components/popover)** - Contenido emergente
- **[Tooltip](https://chakra-ui.com/docs/components/tooltip)** - Información contextual

### Mostrar Datos
- **[Card](https://chakra-ui.com/docs/components/card)** - Tarjetas de contenido
- **[Badge](https://chakra-ui.com/docs/components/badge)** - Etiquetas de estado
- **[Tag](https://chakra-ui.com/docs/components/tag)** - Etiquetas removibles
- **[Avatar](https://chakra-ui.com/docs/components/avatar)** - Imágenes de perfil
- **[Accordion](https://chakra-ui.com/docs/components/accordion)** - Contenido plegable

## ✨ Buenas Prácticas

### 🎨 Sistema de Colores

```jsx
// ✅ Buena práctica - usar colores del tema
<Button colorScheme="blue">Mi Botón</Button>
<Box bg="gray.100" color="gray.800">Contenido</Box>

// ❌ Evitar - colores hardcodeados
<Box bg="#f0f0f0" color="#333">Contenido</Box>
```

**Colores disponibles:** `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `cyan`, `purple`, `pink`

**Intensidades:** `50` (más claro) a `900` (más oscuro)

### 📱 Responsive Design

```jsx
// ✅ Responsive con breakpoints
<Box 
  fontSize={{ base: "sm", md: "md", lg: "lg" }}
  p={{ base: 4, md: 6, lg: 8 }}
>
  Contenido responsive
</Box>

// ✅ Stack responsive
<Stack 
  direction={{ base: "column", md: "row" }}
  spacing={{ base: 4, md: 8 }}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>
```

**Breakpoints de Chakra:**
- `base`: 0px (móvil)
- `sm`: 480px
- `md`: 768px (tablet)
- `lg`: 992px (desktop)
- `xl`: 1280px
- `2xl`: 1536px

### 🎯 Espaciado Consistente

```jsx
// ✅ Usar el sistema de espaciado
<VStack spacing={6}>  // Espaciado uniforme
  <Box p={4}>Item 1</Box>
  <Box p={4}>Item 2</Box>
</VStack>

// ✅ Márgenes y padding sistemáticos
<Box 
  p={6}        // padding: 1.5rem
  m={4}        // margin: 1rem  
  px={8}       // padding-left y padding-right: 2rem
  mt={12}      // margin-top: 3rem
>
```

### 🔧 Composición de Componentes

```jsx
// ✅ Componentes reutilizables
function ProfileCard({ name, role, avatar }) {
  return (
    <Box p={6} borderRadius="lg" bg="white" shadow="md">
      <VStack spacing={4}>
        <Avatar src={avatar} name={name} size="lg" />
        <VStack spacing={1}>
          <Heading size="md">{name}</Heading>
          <Text color="gray.600">{role}</Text>
        </VStack>
      </VStack>
    </Box>
  );
}

// ✅ Uso del componente
<ProfileCard 
  name="María García" 
  role="Frontend Developer" 
  avatar="/avatar.jpg" 
/>
```

### ⚡ Hooks de Chakra UI

```jsx
import { useColorMode, useDisclosure, useToast } from "@chakra-ui/react";

function MyComponent() {
  // Hook para modo oscuro/claro
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Hook para controlar modales/drawers
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Hook para notificaciones
  const toast = useToast();
  
  const showNotification = () => {
    toast({
      title: "¡Éxito!",
      status: "success",
      duration: 3000,
    });
  };
  
  return (
    // Tu componente
  );
}
```

### 🎪 Accesibilidad

```jsx
// ✅ Usar FormControl para formularios
<FormControl isRequired>
  <FormLabel>Email</FormLabel>
  <Input type="email" />
  <FormHelperText>Nunca compartiremos tu email</FormHelperText>
</FormControl>

// ✅ Botones con aria-label
<IconButton 
  aria-label="Cerrar menú"
  icon={<CloseIcon />}
  onClick={handleClose}
/>

// ✅ Usar Heading con niveles correctos
<Heading as="h1" size="2xl">Título Principal</Heading>
<Heading as="h2" size="lg">Subtítulo</Heading>
```

## 🔗 Enlaces Útiles

### 📚 Documentación Oficial
- **[Chakra UI Docs](https://chakra-ui.com/)** - Documentación completa
- **[Getting Started](https://chakra-ui.com/docs/getting-started)** - Guía de inicio
- **[Components](https://chakra-ui.com/docs/components)** - Todos los componentes
- **[Styling](https://chakra-ui.com/docs/styled-system)** - Sistema de estilos

### 🎨 Diseño y Temas
- **[Default Theme](https://chakra-ui.com/docs/theming/theme)** - Tema por defecto
- **[Colors](https://chakra-ui.com/docs/theming/theme#colors)** - Paleta de colores
- **[Customize Theme](https://chakra-ui.com/docs/theming/customize-theme)** - Personalizar tema
- **[Dark Mode](https://chakra-ui.com/docs/styled-system/color-mode)** - Modo oscuro

### 📱 Responsive Design
- **[Responsive Styles](https://chakra-ui.com/docs/styled-system/responsive-styles)** - Diseño responsive
- **[Breakpoints](https://chakra-ui.com/docs/theming/theme#breakpoints)** - Puntos de quiebre

### 🧩 Componentes Específicos
- **[Layout: Box](https://chakra-ui.com/docs/components/box)**
- **[Layout: Stack](https://chakra-ui.com/docs/components/stack)**
- **[Layout: Grid](https://chakra-ui.com/docs/components/grid)**
- **[Form: Input](https://chakra-ui.com/docs/components/input)**
- **[Form: Select](https://chakra-ui.com/docs/components/select)**
- **[Form: Checkbox](https://chakra-ui.com/docs/components/checkbox)**
- **[Button](https://chakra-ui.com/docs/components/button)**
- **[Modal](https://chakra-ui.com/docs/components/modal)**
- **[Alert](https://chakra-ui.com/docs/components/alert)**
- **[Toast](https://chakra-ui.com/docs/components/toast)**
- **[Card](https://chakra-ui.com/docs/components/card)**
- **[Avatar](https://chakra-ui.com/docs/components/avatar)**
- **[Badge](https://chakra-ui.com/docs/components/badge)**

## 📖 Recursos Adicionales

### 🎓 Tutoriales y Cursos
- **[Chakra UI Course](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)** - Curso en Egghead
- **[YouTube Tutorials](https://www.youtube.com/results?search_query=chakra+ui+tutorial)** - Tutoriales en YouTube

### 🛠️ Herramientas
- **[Chakra Templates](https://chakra-templates.dev/)** - Plantillas gratuitas
- **[Chakra UI Pro](https://pro.chakra-ui.com/)** - Componentes premium
- **[Figma Kit](https://www.figma.com/community/file/971408767069651759)** - Kit de diseño para Figma

### 🌐 Comunidad
- **[GitHub](https://github.com/chakra-ui/chakra-ui)** - Repositorio oficial
- **[Discord](https://discord.gg/chakra-ui)** - Comunidad en Discord
- **[Twitter](https://twitter.com/chakra_ui)** - Noticias y actualizaciones

## 🚀 Comandos para Ejecutar este Proyecto

```bash
# Clonar el proyecto (si está en un repositorio)
git clone [URL_DEL_REPO]
cd ejemplo-con-vite

# Instalar dependencias
npm install
# o
yarn install

# Ejecutar en modo desarrollo
npm run dev
# o
yarn dev

# Crear build para producción
npm run build
# o
yarn build
```

## 🎯 Próximos Pasos

1. **Explora cada pestaña** de la aplicación para ver diferentes ejemplos
2. **Modifica los componentes** para experimentar con diferentes props
3. **Crea tus propios componentes** combinando los existentes
4. **Practica el responsive design** probando en diferentes tamaños de pantalla
5. **Personaliza el tema** con tus propios colores y estilos

---

## 🤝 ¿Necesitas Ayuda?

- Revisa la **[documentación oficial](https://chakra-ui.com/)**
- Únete a la **[comunidad de Discord](https://discord.gg/chakra-ui)**
- Busca en **[Stack Overflow](https://stackoverflow.com/questions/tagged/chakra-ui)**
- Consulta **[GitHub Issues](https://github.com/chakra-ui/chakra-ui/issues)**

¡Happy coding! 🎉✨
