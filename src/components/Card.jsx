import {
  Box,
  Image,
  Text,
  Button,
  Badge,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const Card = ({ title = "Producto Ejemplo", price = "$29.99", imageUrl, category = "Tecnología" }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bg}
      borderColor={borderColor}
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
      transition="all 0.3s"
    >
      <Image
        src={imageUrl || "https://via.placeholder.com/300x200"}
        alt={title}
        height="200px"
        width="100%"
        objectFit="cover"
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>
        </Box>

        <Stack spacing="3" mt="3">
          <Text
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Text>

          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            {price}
          </Text>

          <Button
            colorScheme="teal"
            variant="solid"
            size="md"
            width="100%"
            _hover={{ bg: "teal.600" }}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;