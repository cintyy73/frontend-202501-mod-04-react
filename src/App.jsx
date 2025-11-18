import { 
  Container, 
  VStack, 
  Heading, 
  Tab, 
  TabList, 
  TabPanels, 
  TabPanel, 
  Tabs,
  Divider,
  Box,
  Text,
  SimpleGrid,
  HStack
} from "@chakra-ui/react";
import LayoutAndFeedback from "./components/LayoutAndFeedback";
import InteractiveComponents from "./components/InteractiveComponents";
import BasicComponents from "./components/BasicComponents";
import ChakraGuide from "./components/ChakraGuide";
import Alert from "./components/Alert";
import Card from "./components/Card";
import FormExample from "./components/FormExample";

function App() {
  return (
    <Container maxW="1200px" py={8}>
      <VStack spacing={6}>
        <Heading size="2xl" textAlign="center" color="purple.600" mb={4}>
          🎨 Ejemplos de Chakra UI v2
        </Heading>
        
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
          Guía completa para alumnas que usan Chakra UI por primera vez. 
          Aprende con ejemplos prácticos y componentes interactivos.
        </Text>
        
        <Tabs variant="enclosed" colorScheme="purple" w="full">
          <TabList>
            <Tab>📚 Guía</Tab>
            <Tab>🔧 Básicos</Tab>
            <Tab>📐 Layout</Tab>
            <Tab>🎯 Interactivos</Tab>
            <Tab>📝 Formularios</Tab>
            <Tab>🎴 Originales</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ChakraGuide />
            </TabPanel>
            
            <TabPanel>
              <BasicComponents />
            </TabPanel>
            
            <TabPanel>
              <LayoutAndFeedback />
            </TabPanel>
            
            <TabPanel>
              <InteractiveComponents />
            </TabPanel>
            
            <TabPanel>
              <FormExample />
            </TabPanel>
            
            <TabPanel>
              <VStack spacing={6}>
                <Heading size="lg" color="teal.600">
                  Componentes Originales del Proyecto
                </Heading>
                
                <Text color="gray.600" textAlign="center">
                  Estos son algunos ejemplos de componentes creados desde cero con Chakra UI
                </Text>
                
                <Box w="full">
                  <Heading size="md" mb={4} color="blue.600">
                    🚨 Componentes de Alerta
                  </Heading>
                  <VStack spacing={4}>
                    <Alert 
                      status="success" 
                      title="¡Éxito!" 
                      description="Esta es una alerta de éxito personalizada."
                    />
                    <Alert 
                      status="error" 
                      title="Error" 
                      description="Componente de alerta para mostrar errores."
                    />
                    <Alert 
                      status="warning" 
                      title="Advertencia" 
                      description="Alerta de advertencia personalizada."
                    />
                  </VStack>
                </Box>
                
                <Divider />
                
                <Box w="full">
                  <Heading size="md" mb={4} color="teal.600">
                    🎴 Galería de Cards
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
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
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
}

export default App;
