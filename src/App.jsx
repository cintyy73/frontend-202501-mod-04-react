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
  Alert,
  Card
} from "@chakra-ui/react";
import LayoutAndFeedback from "./components/LayoutAndFeedback";
import InteractiveComponents from "./components/InteractiveComponents";
import BasicComponents from "./components/BasicComponents";
import ChakraGuide from "./components/ChakraGuide";

function App() {
  return (
    <Container maxW="1200px" py={8}>
      <VStack spacing={6}>
        <Heading size="2xl" textAlign="center" color="purple.600" mb={4}>
          🎨 Ejemplos de Chakra UI v2
        </Heading>
        
        <Tabs variant="enclosed" colorScheme="purple" w="full">
          <TabList>
            <Tab>📚 Guía</Tab>
            <Tab>🔧 Básicos</Tab>
            <Tab>📐 Layout</Tab>
            <Tab>🎯 Interactivos</Tab>
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
              <VStack spacing={6}>
                <Heading size="lg" color="teal.600">
                  Componentes Originales del Proyecto
                </Heading>
                
                <Alert />
                
                <Divider />
                
                <Box>
                  <Heading size="md" mb={4} textAlign="center">
                    Galería de Cards
                  </Heading>
                  <VStack spacing={4}>
                    <Card />
                    <Card />
                    <Card />
                  </VStack>
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
