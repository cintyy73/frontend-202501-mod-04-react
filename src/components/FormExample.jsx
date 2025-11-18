import {
  Box,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    categoria: '',
    newsletter: false,
    contacto: 'email'
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Formulario enviado",
        description: "Gracias por tu mensaje. Te contactaremos pronto.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
        categoria: '',
        newsletter: false,
        contacto: 'email'
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" bg="white">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.nombre}>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
            />
            <FormErrorMessage>{errors.nombre}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
            <FormHelperText>Nunca compartiremos tu email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Categoría</FormLabel>
            <Select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              placeholder="Selecciona una categoría"
            >
              <option value="consulta">Consulta general</option>
              <option value="soporte">Soporte técnico</option>
              <option value="ventas">Ventas</option>
              <option value="otros">Otros</option>
            </Select>
          </FormControl>

          <FormControl isInvalid={errors.mensaje}>
            <FormLabel>Mensaje</FormLabel>
            <Textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows={4}
            />
            <FormErrorMessage>{errors.mensaje}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Método de contacto preferido</FormLabel>
            <RadioGroup
              name="contacto"
              value={formData.contacto}
              onChange={(value) => setFormData(prev => ({ ...prev, contacto: value }))}
            >
              <HStack spacing={4}>
                <Radio value="email">Email</Radio>
                <Radio value="telefono">Teléfono</Radio>
                <Radio value="whatsapp">WhatsApp</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <Checkbox
              name="newsletter"
              isChecked={formData.newsletter}
              onChange={handleChange}
            >
              Quiero recibir el newsletter
            </Checkbox>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="100%"
            size="lg"
            isDisabled={!formData.nombre || !formData.email || !formData.mensaje}
          >
            Enviar mensaje
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FormExample;