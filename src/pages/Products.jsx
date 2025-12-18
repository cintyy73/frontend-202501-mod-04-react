/**
 * 🛍️ PRODUCTS - Query Params con useSearchParams + Fetch API
 * 
 * Conceptos clave:
 * 
 * 1️⃣ useSearchParams:
 * - Maneja query strings en la URL (?q=react&category=tech)
 * - Similar a useState pero sincronizado con la URL
 * - Los cambios se reflejan en la barra de direcciones
 * 
 * 2️⃣ Fetch API + useEffect:
 * - useEffect se ejecuta al montar el componente
 * - fetch() obtiene datos de una API externa
 * - Manejo de 3 estados: loading, error, success
 * 
 * 3️⃣ Filtrado en tiempo real:
 * - El input actualiza los query params
 * - Los query params filtran los productos
 * - Todo queda guardado en la URL (se puede compartir)
 * 
 * Ejemplo de URLs:
 * - /products → Muestra todos
 * - /products?q=phone → Filtra por "phone"
 * - /products?q=laptop → Filtra por "laptop"
 * 
 * ✨ Ventaja: La URL es compartible y mantiene el estado
 */

import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
  Button,
} from "@chakra-ui/react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Products() {
  // 🔍 useSearchParams maneja query strings (?q=valor)
  // Similar a useState pero sincronizado con la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // Lee el parámetro "q" de la URL
  const navigate = useNavigate(); // 🧭 Para navegar al detalle del producto
  
  // 📦 Estados para el fetch
  const [products, setProducts] = useState([]);    // Datos de la API
  const [loading, setLoading] = useState(true);    // ¿Está cargando?
  const [error, setError] = useState(null);        // ¿Hubo error?

  // 🎬 useEffect se ejecuta al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 📡 Fetch a API externa (DummyJSON es una API de prueba gratuita)
        const response = await fetch("https://dummyjson.com/products?limit=20");
        
        if (!response.ok) throw new Error("Error al cargar productos");
        
        const data = await response.json();
        setProducts(data.products); // Guardar productos en el estado
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Siempre se ejecuta (éxito o error)
      }
    };

    fetchProducts();
  }, []); // [] = solo se ejecuta una vez al montar

  // 🔍 Actualizar la URL cuando el usuario escribe
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      // Si hay texto, agregar ?q=valor a la URL
      setSearchParams({ q: value });
    } else {
      // Si está vacío, limpiar los query params
      setSearchParams({});
    }
  };

  // ✨ Filtrar productos según el query de la URL
  // Si no hay query, muestra todos
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        🛍️ Productos
      </Heading>
      <VStack spacing={6} align="stretch">
        <Box p={4} bg="blue.50" borderRadius="md">
          <Text fontSize="sm" color="blue.800">
            💡 <strong>useSearchParams en acción:</strong> Escribe en el input y mira la URL.
            Los query params permiten compartir búsquedas (copia y pega la URL).
          </Text>
        </Box>
        
        {/* 🔍 Input sincronizado con la URL */}
        <Input
          placeholder="Buscar productos..."
          value={query}
          onChange={handleSearch}
          size="lg"
        />
        
        {query && (
          <Text fontSize="lg">
            🔍 Encontrados: <strong>{filteredProducts.length}</strong> productos para "{query}"
          </Text>
        )}

        {loading && (
          <Box textAlign="center" py={10}>
            <Spinner size="xl" color="teal.500" />
            <Text mt={4}>Cargando productos...</Text>
          </Box>
        )}

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredProducts.map((product) => (
              <Card key={product.id} maxW="sm" variant="outline">
                <CardBody>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    borderRadius="lg"
                    h="200px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Stack mt={4} spacing={3}>
                    <Heading size="md">{product.title}</Heading>
                    <Text color="gray.600" noOfLines={2}>
                      {product.description}
                    </Text>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Text fontSize="2xl" color="teal.600" fontWeight="bold">
                        ${product.price}
                      </Text>
                      <Badge colorScheme="green" fontSize="sm">
                        {product.category}
                      </Badge>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Text fontSize="sm" color="gray.500">
                        ⭐ {product.rating} | Stock: {product.stock}
                      </Text>
                    </Box>
                    
                    {/* 🔗 Botón para ver el detalle del producto */}
                    <Button 
                      colorScheme="teal" 
                      size="sm" 
                      w="full"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      Ver más
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <Box textAlign="center" py={10}>
            <Text fontSize="xl" color="gray.500">
              No se encontraron productos
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
