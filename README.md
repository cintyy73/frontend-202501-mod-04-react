# Teoría de Inputs y useState en React

Este proyecto contiene varios componentes que ilustran el uso de **inputs** y el **hook useState** en React. A continuación se explica la teoría y se muestran ejemplos prácticos basados en los componentes del proyecto.

## ¿Qué es un input controlado?
Un **input controlado** es aquel cuyo valor es gestionado por el estado de React. Esto permite que el valor del input siempre esté sincronizado con el estado del componente.

### Ejemplo: ControlledTextBase.jsx
```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

## ¿Qué es useState?
`useState` es un hook de React que permite agregar estado local a los componentes funcionales. Se usa para guardar y actualizar valores que cambian con la interacción del usuario.

### Sintaxis básica
```jsx
const [valor, setValor] = useState(valorInicial);
```

## Ejemplos prácticos

### 1. Texto controlado
- El valor del input se guarda en el estado y se actualiza con cada cambio.
- Componente: `ControlledTextBase.jsx`

### 2. Filtro en vivo
- El input filtra una lista en tiempo real usando el estado.
- Componente: `LiveFilterListBase.jsx`

### 3. Checklist de habilidades
- El estado es un array que guarda las habilidades seleccionadas.
- Componente: `SkillsChecklistBase.jsx`

### 4. Lista de tareas
- El estado guarda la tarea actual y la lista de tareas.
- Componente: `TodoListBase.jsx`

### 5. Toggle de contraseña
- El estado controla si el input muestra u oculta la contraseña.
- Componente: `PasswordToggle.jsx`

## Inputs NO controlados
Un input no controlado es aquel cuyo valor se accede directamente desde el DOM, por ejemplo usando `useRef`.

### Ejemplo: FormWithRef.jsx
```jsx
const nameRef = useRef(null);
<input ref={nameRef} />
```

## Resumen
- **Inputs controlados** usan `useState` para manejar el valor.
- **Inputs no controlados** usan referencias (`useRef`) para acceder al valor directamente.
- El hook `useState` es fundamental para crear interfaces interactivas y reactivas en React.

---

> Explora los componentes en la carpeta `src/components` para ver ejemplos prácticos de cada caso.
