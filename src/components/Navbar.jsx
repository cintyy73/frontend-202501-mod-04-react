import { Box, Flex, Button, Spacer, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={3} color="white">
      <Flex align="center">
        <Heading as="h2" size="md">
          Mi App
        </Heading>
        <Spacer />
        <Flex gap={4}>
          <Button as={Link} to="/" colorScheme="whiteAlpha" variant="ghost">
            Home
          </Button>
          <Button as={Link} to="/about" colorScheme="whiteAlpha" variant="ghost">
            About
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
