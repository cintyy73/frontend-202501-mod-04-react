# Clase 05: Introducción a los Hooks en React

## Reglas de los Hooks
1. **Llamar Hooks solo en el nivel superior**: No uses Hooks dentro de loops, condiciones o funciones anidadas.
2. **Llamar Hooks solo desde funciones de React**: Usa Hooks únicamente en componentes funcionales o tus propios Hooks personalizados.

### Ejemplo:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## Estado en React
El estado es una forma de almacenar datos que cambian con el tiempo en un componente.

### Ejemplo:
```jsx
function Example() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hola, {name}!</p>
    </div>
  );
}
```

---

## Inmutabilidad
En React, nunca debes modificar el estado directamente. En su lugar, crea una nueva copia del estado.

### Ejemplo:
```jsx
function List() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Elemento ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Agregar elemento</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## useState paso a paso
1. Importa `useState` desde React.
2. Declara una variable de estado y su función para actualizarla.
3. Usa la variable de estado en tu componente.
4. Actualiza el estado con la función proporcionada.

### Ejemplo:
```jsx
function StepByStep() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
```

---

## Estado vs Props
- **Estado**: Datos locales al componente, pueden cambiar.
- **Props**: Datos pasados desde un componente padre, son inmutables.

### Ejemplo:
```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  const [text, setText] = useState('Hola desde el padre');

  return (
    <div>
      <Child message={text} />
      <button onClick={() => setText('Mensaje actualizado')}>Actualizar</button>
    </div>
  );
}
```

---

## Pasando funciones como props
Puedes pasar funciones desde un componente padre a un hijo para manejar eventos.

### Ejemplo:
```jsx
function Child({ onButtonClick }) {
  return <button onClick={onButtonClick}>Haz clic</button>;
}

function Parent() {
  const handleClick = () => alert('Botón clicado');

  return <Child onButtonClick={handleClick} />;
}
```

---

## Atributos de eventos (onClick, etc.)
React utiliza camelCase para los nombres de los atributos de eventos.

### Ejemplo:
```jsx
function EventExample() {
  const handleClick = () => console.log('Botón clicado');

  return <button onClick={handleClick}>Clic aquí</button>;
}
```

---

## Más información sobre Hooks

### ¿Qué son los Hooks?
Los Hooks son una nueva adición en React 16.8 que permiten usar estado y otras características de React sin escribir una clase. Los Hooks son funciones que te permiten "enganchar" características de React en componentes funcionales.

### ¿Por qué usar Hooks?
1. **Reutilización de lógica de estado**: Los Hooks permiten reutilizar lógica de estado entre componentes sin cambiar la jerarquía de componentes.
2. **Componentes más simples**: Reducen la necesidad de usar clases, haciendo que los componentes sean más fáciles de entender y probar.
3. **Mejor manejo de efectos secundarios**: Con `useEffect`, puedes manejar efectos secundarios como suscripciones o actualizaciones del DOM de manera más clara.

### Principales Hooks en React
1. **useState**: Maneja el estado local en un componente funcional.
2. **useEffect**: Maneja efectos secundarios como llamadas a APIs o suscripciones.
3. **useContext**: Accede al contexto sin necesidad de un componente de orden superior.
4. **useReducer**: Alternativa a `useState` para manejar lógica de estado más compleja.
5. **useRef**: Accede directamente a un elemento del DOM o guarda valores persistentes entre renders.
6. **useMemo**: Memoriza valores calculados para optimizar el rendimiento.
7. **useCallback**: Memoriza funciones para evitar renders innecesarios.


---
