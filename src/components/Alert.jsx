import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

const Alert = ({ 
  status = "info", 
  title = "Información importante", 
  description = "Este es un ejemplo de alerta de Chakra UI v2",
  isClosable = true 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <ChakraAlert status={status} borderRadius="md" mb={4}>
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription display="block">
          {description}
        </AlertDescription>
      </Box>
      {isClosable && (
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={() => setIsVisible(false)}
        />
      )}
    </ChakraAlert>
  );
};

export default Alert;