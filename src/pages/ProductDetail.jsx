/**
 * 🛍️ PRODUCT DETAIL - Detalle de Producto con useParams
 * 
 * Conceptos clave:
 * - Similar a UserDetail pero con datos de una API
 * - useParams extrae el ID del producto de la URL
 * - useEffect hace fetch del producto específico
 * - Manejo de estados: loading, error, success
 * 
 * Ejemplo de URL:
 * - /products/1 → Muestra el producto con ID 1
 * - /products/25 → Muestra el producto con ID 25
 */

import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";

export default function ProductDetail() {
  // 🎯 Extraer el ID del producto de la URL
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 📦 Estados para el fetch
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🎬 Fetch del producto específico cuando el componente se monta
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 📡 Fetch a API externa - producto específico por ID
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        
        const data = await response.json();
        setProduct(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // ⚠️ Se ejecuta cada vez que cambia el ID

  // 🔄 Estado: LOADING
  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="teal.500" />
        <Text mt={4}>Cargando producto...</Text>
      </Box>
    );
  }

  // ❌ Estado: ERROR
  if (error) {
    return (
      <Box py={10} px={6} maxW="800px" mx="auto">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
        <Button 
          mt={4} 
          leftIcon={<ArrowBackIcon />}
          colorScheme="teal" 
          onClick={() => navigate("/products")}
        >
          Volver a productos
        </Button>
      </Box>
    );
  }

  // ✅ Estado: SUCCESS
  return (
    <Box py={10} px={6} maxW="1000px" mx="auto">
      <Button 
        mb={6}
        leftIcon={<ArrowBackIcon />}
        colorScheme="teal" 
        variant="outline"
        onClick={() => navigate("/products")}
      >
        Volver a productos
      </Button>

      <Box bg="white" p={8} borderRadius="lg" shadow="md">
        <HStack spacing={8} align="start" flexDirection={{ base: "column", md: "row" }}>
          {/* 🖼️ Imagen del producto */}
          <Box flex="1" maxW={{ base: "100%", md: "400px" }}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              borderRadius="lg"
              w="100%"
              h="400px"
              objectFit="cover"
            />
          </Box>

          {/* 📝 Información del producto */}
          <VStack flex="1" align="start" spacing={4}>
            <Badge colorScheme="purple" fontSize="md">
              {product.category}
            </Badge>
            
            <Heading as="h1" size="2xl">
              {product.title}
            </Heading>

            <HStack>
              <StarIcon color="yellow.400" />
              <Text fontWeight="bold">{product.rating}</Text>
              <Text color="gray.500">({product.reviews?.length || 0} reviews)</Text>
            </HStack>

            <Text fontSize="3xl" color="teal.600" fontWeight="bold">
              ${product.price}
            </Text>

            <Badge colorScheme={product.stock > 10 ? "green" : "red"} fontSize="md">
              {product.stock > 10 ? `En stock: ${product.stock}` : "Últimas unidades"}
            </Badge>

            <Divider />

            <Box>
              <Heading size="md" mb={2}>Descripción</Heading>
              <Text color="gray.600">{product.description}</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Detalles</Heading>
              <VStack align="start" spacing={2}>
                <Text><strong>Marca:</strong> {product.brand}</Text>
                <Text><strong>SKU:</strong> {product.sku}</Text>
                <Text><strong>Peso:</strong> {product.weight}g</Text>
                <Text><strong>Garantía:</strong> {product.warrantyInformation}</Text>
                <Text><strong>Envío:</strong> {product.shippingInformation}</Text>
              </VStack>
            </Box>

            <Button colorScheme="teal" size="lg" w="full">
              Agregar al carrito
            </Button>
          </VStack>
        </HStack>
      </Box>

      {/* 💡 Explicación educativa */}
      <Box mt={8} p={4} bg="purple.50" borderRadius="md">
        <Text fontSize="sm" color="purple.800">
          💡 <strong>useParams + Fetch dinámico:</strong><br/>
          - URL actual: <code>/products/{id}</code><br/>
          - Parámetro extraído: <code>id = "{id}"</code><br/>
          - Fetch a: <code>https://dummyjson.com/products/{id}</code><br/>
          - El useEffect se ejecuta cada vez que cambia el ID
        </Text>
      </Box>
    </Box>
  );
}
