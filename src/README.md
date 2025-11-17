# 💅 Clase 12: Styled Components - CSS-in-JS

## 🎯 Objetivos de la Clase (60 minutos)

- Entender qué es CSS-in-JS y por qué usarlo
- Aprender la sintaxis básica de styled-components
- Implementar componentes estilizados dinámicos
- Manejar props para estilos condicionales
- Usar temas globales con ThemeProvider
- Crear animaciones y transiciones
- Implementar estilos responsivos

---

## 📚 ¿Qué es Styled Components?

**Styled Components** es una librería para React que permite escribir CSS dentro de JavaScript usando **template literals**. Es una implementación del patrón **CSS-in-JS**.

### 🤔 ¿Por qué CSS-in-JS?

#### ❌ Problemas del CSS tradicional:
- **Conflictos de nombres**: Clases globales que se sobrescriben
- **CSS muerto**: Estilos que no sabemos si se usan
- **Falta de dinámismo**: Difícil cambiar estilos según estado
- **No encapsulación**: Los estilos afectan a otros componentes

#### ✅ Ventajas de Styled Components:
- **Scoped CSS**: Cada componente tiene sus estilos únicos
- **Props dinámicas**: Estilos que cambian según las props
- **Eliminación automática**: Solo se cargan los estilos que se usan
- **Temas globales**: Sistema de temas consistente
- **Server-side rendering**: Compatible con SSR

---

## 📦 Instalación

```bash
yarn add styled-components
```

```bash
# Para TypeScript (opcional)
yarn add --save-dev @types/styled-components
```

---

## 🎨 Sintaxis Básica

### 1. Componente Simple

```jsx
import styled from 'styled-components';

// 🔥 Creamos un componente estilizado
const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

// 🎯 Lo usamos como cualquier componente
function App() {
  return <Button>Click me!</Button>;
}
```

### 2. Props Dinámicas

```jsx
const Button = styled.button`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: ${props => props.size === 'large' ? '16px 32px' : '8px 16px'};
  
  /* También podemos usar funciones */
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

// Uso:
<Button primary size="large">Primary Large</Button>
<Button disabled>Disabled Button</Button>
```

### 3. Extender Estilos

```jsx
const BaseButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 🎯 Extendemos el botón base
const PrimaryButton = styled(BaseButton)`
  background: #007bff;
  color: white;
  
  &:hover {
    background: #0056b3;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: #6c757d;
  color: white;
`;
```

---

## 🌙 Temas Globales con ThemeProvider

### 1. Definir el Tema

```jsx
// theme.js
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};
```

### 2. Configurar ThemeProvider

```jsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}
```

### 3. Usar el Tema

```jsx
const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.small};
  }
`;
```

---

## 🎬 Animaciones y Transiciones

### 1. Keyframes

```jsx
import styled, { keyframes } from 'styled-components';

// Definir la animación
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedBox = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;
```

### 2. Transiciones

```jsx
const InteractiveCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;
```

---

## 📱 Estilos Responsivos

### 1. Media Queries

```jsx
const ResponsiveContainer = styled.div`
  padding: 16px;
  
  @media (max-width: 768px) {
    padding: 8px;
  }
  
  @media (min-width: 1200px) {
    padding: 32px;
  }
`;
```

### 2. Helper de Breakpoints

```jsx
// utils/breakpoints.js
export const device = {
  mobile: `(max-width: 768px)`,
  tablet: `(max-width: 1024px)`,
  desktop: `(min-width: 1025px)`
};

// Uso:
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
```

---

## 🎯 Estructura de Archivos Recomendada

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.styled.js
│   └── Card/
│       ├── Card.jsx
│       └── Card.styled.js
├── styles/
│   ├── theme.js
│   ├── GlobalStyles.js
│   └── breakpoints.js
└── App.jsx
```

---

## 🛠️ Mejores Prácticas

### ✅ Do's (Hacer):

1. **Usar nombres descriptivos**:
   ```jsx
   const PrimaryButton = styled.button`...`;  // ✅ Bueno
   const Btn = styled.button`...`;           // ❌ Malo
   ```

2. **Agrupar props relacionadas**:
   ```jsx
   const Button = styled.button`
     /* Layout */
     padding: ${props => props.size === 'large' ? '16px 32px' : '8px 16px'};
     margin: ${props => props.margin || '0'};
     
     /* Colors */
     background: ${props => props.variant === 'primary' ? '#007bff' : '#6c757d'};
     color: white;
   `;
   ```

3. **Usar ThemeProvider para valores globales**:
   ```jsx
   background: ${props => props.theme.colors.primary};  // ✅
   background: #007bff;                                 // ❌
   ```

### ❌ Don'ts (No hacer):

1. **No crear componentes estilizados en el render**:
   ```jsx
   function Component() {
     const Button = styled.button`...`;  // ❌ Se recrea en cada render
     return <Button />;
   }
   ```

2. **No usar styled-components para estilos muy simples**:
   ```jsx
   const RedText = styled.span`color: red;`;  // ❌ Mejor usar className
   ```

---

## 🏆 Ejercicios Prácticos

### 📝 Ejercicio 1: Botón Dinámico
Crear un botón que cambie de color según la prop `variant`:
- `primary`: Azul
- `secondary`: Gris
- `success`: Verde
- `danger`: Rojo

### 📝 Ejercicio 2: Card con Hover
Crear una tarjeta que:
- Tenga sombra suave
- Al hacer hover se eleve y la sombra sea más intensa
- Tenga animación suave

### 📝 Ejercicio 3: Grid Responsivo
Crear un grid que:
- Desktop: 4 columnas
- Tablet: 2 columnas
- Mobile: 1 columna

---

## 📚 Recursos Adicionales

- [Documentación Oficial](https://styled-components.com/)
- [Best Practices Guide](https://styled-components.com/docs/basics#best-practices)
- [CSS-in-JS Comparison](https://github.com/MicheleBertoli/css-in-js)
- [Styled System](https://styled-system.com/) - Sistema de design con styled-components

---