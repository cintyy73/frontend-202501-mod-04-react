# 🎯 Clase de Repaso React - Lista de Contactos

## 📋 Objetivo de la Clase
Repasar conceptos fundamentales de React creando una **Lista de Contactos** que prepare a las estudiantes para el TP final de Todo List.

## 🏁 Instrucciones de Inicio
```bash
npm install
# O si prefieres yarn:
yarn install

# Iniciar servidor de desarrollo
npm run dev
# O con yarn:
yarn dev
```

## 🎨 Estilos CSS Incluidos
Se incluye un archivo `src/styles/ContactApp.css` con estilos profesionales que las alumnas pueden usar directamente:

- ✅ **Clases CSS listas para usar**
- ✅ **Diseño responsive** 
- ✅ **Iconos con react-icons**
- ✅ **Animaciones suaves**
- ✅ **Estados visuales** (hover, focus, completed)

**Para usar los estilos:** `import './styles/ContactApp.css'`

---

## 🎓 Ejercicios Graduales (2 horas aprox.)

### 📝 **Ejercicio 1: Estructura Básica y JSX** (20 min)
**Conceptos:** JSX, componentes funcionales, estructura

**Consigna:** Crear la estructura visual de una lista de contactos
- Título de la aplicación "Mi Lista de Contactos"
- Lista hardcodeada de 3 contactos con nombre y teléfono
- Cada contacto debe mostrarse en una tarjeta simple

**💡 Pista:** Usa JSX para estructurar y arrays hardcodeados para los datos

---

### 📝 **Ejercicio 2: Componentes y Props** (25 min)
**Conceptos:** Props, componentes reutilizables, map()

**Consigna:** Modularizar la aplicación
- Crear componente `ContactCard` que reciba props (name, phone)
- Crear componente `ContactList` que renderice múltiples contactos
- Pasar datos como props desde App
- Usar `.map()` para renderizar la lista

**⚠️ Recordar:** Cada elemento de la lista necesita una `key` única

---

### 📝 **Ejercicio 3: Estado con useState** (25 min)
**Conceptos:** useState, inmutabilidad, eventos

**Consigna:** Hacer la aplicación interactiva
- Mover los contactos hardcodeados a un estado
- Crear formulario para agregar nuevos contactos (nombre y teléfono)
- Implementar función para agregar contactos
- **Validación:** No permitir campos vacíos

**💡 Pista:** Usa `useState` para el estado de contactos y para controlar los inputs

---

### 📝 **Ejercicio 4: useEffect y localStorage** (25 min)
**Conceptos:** useEffect, localStorage, ciclo de vida

**Consigna:** Persistir datos
- Guardar contactos en localStorage cuando cambie el estado
- Cargar contactos desde localStorage al iniciar la app
- Usar `useEffect` para ambas acciones

**⚠️ Importante:** Manejar casos cuando localStorage esté vacío

---

### 📝 **Ejercicio 5: Marcar como Contactado** (20 min)
**Conceptos:** Actualización de estado, inmutabilidad, renderizado condicional

**Consigna:** Agregar funcionalidad para tachar contactos
- Conectar botón de toggle en cada ContactCard
- Implementar función que cambie el estado `isCompleted`
- Aplicar estilos condicionales (tachado, colores)
- Agregar iconos con react-icons

**💡 Pista:** Usar `map()` para actualizar solo el contacto específico

---

### 📝 **Ejercicio 6: Eliminar Contactos** (20 min)
**Conceptos:** Filtrado de arrays, confirmaciones, inmutabilidad

**Consigna:** Agregar funcionalidad de eliminar
- Conectar botón eliminar de cada ContactCard
- Implementar función que filtre el contacto eliminado
- **Validación:** Confirmar antes de eliminar
- Mostrar feedback al usuario

**💡 Pista:** Usar `array.filter()` y `window.confirm()`

---

### 📝 **Ejercicio Bonus: Funcionalidades Avanzadas** (25 min)
**Conceptos:** Filtrado en tiempo real, estadísticas

**Consigna:** Completar la aplicación
- Implementar buscador que filtre por nombre o teléfono
- Mostrar contador de contactos
- Mostrar mensaje cuando no hay resultados
- Mejorar la interfaz visual

---

## 🧠 Conceptos Teóricos Clave

### 🔧 **useState Hook**
```javascript
// ✅ Correcto - Inmutabilidad
const [contacts, setContacts] = useState([]);
setContacts([...contacts, newContact]);

// ❌ Incorrecto - Mutación directa
contacts.push(newContact);
```

### 🔄 **useEffect Hook**
```javascript
// Cargar datos al montar el componente
useEffect(() => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    setContacts(JSON.parse(savedContacts));
  }
}, []); // Array vacío = solo al montar

// Guardar cuando cambie el estado
useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]); // Se ejecuta cuando contacts cambie
```

### ✅ **Marcar como Contactado**
```javascript
const handleToggleComplete = (contactId) => {
  // Actualizar solo el contacto específico
  setContacts(contacts.map(contact => 
    contact.id === contactId 
      ? { ...contact, isCompleted: !contact.isCompleted }
      : contact
  ));
};

// En JSX - estilos condicionales
<div className={`contact-card ${isCompleted ? 'completed' : ''}`}>
  <h3 className={isCompleted ? 'completed' : ''}>{name}</h3>
</div>
```

### 📱 **React Icons**
```javascript
// Importar iconos específicos
import { FaPhone, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

// Usar en JSX
<FaPhone /> {phone}
<button><FaTrash /> Eliminar</button>
```

### 🗑️ **Eliminar Contactos**
```javascript
const handleDeleteContact = (contactId) => {
  // 1. Confirmar antes de eliminar
  const confirmed = window.confirm('¿Seguro que quieres eliminar?');
  if (!confirmed) return;

  // 2. Filtrar todos excepto el que queremos eliminar
  setContacts(contacts.filter(contact => contact.id !== contactId));
  
  // 3. Feedback al usuario
  alert('✅ Contacto eliminado');
};
```

### 🎯 **Props y Flujo de Datos**
```javascript
// Componente padre pasa datos al hijo
<ContactCard name={contact.name} phone={contact.phone} />

// Componente hijo recibe props
function ContactCard({ name, phone }) {
  return <div>{name} - {phone}</div>;
}
```

### 📝 **Manejo de Formularios**
```javascript
const [formData, setFormData] = useState({ name: '', phone: '' });

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

---

## 🚨 Errores Comunes y Soluciones

### ❌ **Error: Missing key prop**
```javascript
// Problema
{contacts.map(contact => <ContactCard />)}

// Solución
{contacts.map(contact => <ContactCard key={contact.id} />)}
```

### ❌ **Error: Cannot read properties of undefined**
```javascript
// Problema - no validar si hay datos
localStorage.getItem('contacts').length

// Solución - validar antes de usar
const saved = localStorage.getItem('contacts');
if (saved && saved.length > 0) { ... }
```

### ❌ **Error: Component re-renders infinitely**
```javascript
// Problema - useEffect sin dependencias controladas
useEffect(() => {
  setContacts(newData);
});

// Solución - especificar dependencias
useEffect(() => {
  setContacts(newData);
}, [dependencia]);
```

---

## 🎯 Preparación para el TP Todo List

### Similitudes que practicamos:
- ✅ Gestión de estado con useState
- ✅ Persistencia con localStorage  
- ✅ Formularios controlados con validaciones
- ✅ Renderizado de listas dinámicas
- ✅ useEffect para ciclo de vida
- ✅ Modularización en componentes
- ✅ Props y flujo de datos

### Lo que aplicarán en el TP:
- 📝 Reemplazar "contactos" por "tareas"
- ✏️ Agregar funcionalidad de editar
- ✔️ Agregar toggle de completado
- 🎛️ Filtros por estado (todas/completadas/pendientes)
- 🎨 Estilos más elaborados
- 📱 Responsive design

---

## 🔧 Estructura Final Esperada
```
src/
├── App.jsx
├── components/
│   ├── ContactList.jsx
│   ├── ContactCard.jsx
│   ├── ContactForm.jsx
│   └── SearchBar.jsx (opcional)
└── utils/
    └── localStorage.js (opcional)
```

---

## 💪 Desafíos Opcionales
- Editar contactos existentes
- Validar formato de teléfono
- Ordenar contactos alfabéticamente
- Agregar más campos (email, dirección)

¡Mucho éxito en la clase! 🚀
