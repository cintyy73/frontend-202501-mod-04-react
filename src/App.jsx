import { Container, HStack, Text, VStack } from "@chakra-ui/react";
import Card from "./components/Card";
import Alert from "./components/Alert";

function App() {
  return (
    <Container>
      <Alert/>
      <HStack>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </HStack>
      <VStack>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </VStack>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default App;
