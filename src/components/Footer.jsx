/**
 * 🔗 FOOTER - Pie de página con links externos
 * 
 * Conceptos clave:
 * 
 * 📌 LINKS EXTERNOS vs INTERNOS:
 * - <Link> de Chakra: Para enlaces externos (href)
 * - <Link> de React Router: Para navegación interna (to)
 * - isExternal: Abre el enlace en una nueva pestaña
 * 
 * 📌 ICONOS:
 * - ExternalLinkIcon: Indica que el link abre en otra pestaña
 * - Se usa con <Icon as={ExternalLinkIcon} />
 * 
 * 📌 CHAKRA UI - SPACING:
 * - py: padding vertical
 * - px: padding horizontal
 * - gap: espacio entre elementos en un Flex
 * - mt="auto": Empuja el footer hacia abajo
 */

import { Box, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={8} px={8} mt="auto">
      <Flex direction="column" align="center" gap={4}>
        <Text fontSize="lg" fontWeight="bold">
          Mi Aplicación con Chakra UI + React Router
        </Text>
        
        {/* Links externos - usan href y isExternal */}
        <Flex gap={6}>
          <Link href="https://chakra-ui.com" isExternal color="teal.300">
            Chakra UI <Icon as={ExternalLinkIcon} mx={1} />
          </Link>
          <Link href="https://reactrouter.com" isExternal color="teal.300">
            React Router <Icon as={ExternalLinkIcon} mx={1} />
          </Link>
          <Link href="https://react.dev" isExternal color="teal.300">
            React <Icon as={ExternalLinkIcon} mx={1} />
          </Link>
        </Flex>
        
        <Text fontSize="sm" color="gray.400">
          © 2025 - Proyecto de ejemplo
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
