# 🎨 Renderizado Condicional en React

Este proyecto demuestra las **5 técnicas principales** de renderizado condicional en React con ejemplos prácticos y bien documentados.

## 📚 Tabla de Contenidos

- [Teoría del Renderizado Condicional](#-teoría-del-renderizado-condicional)
- [Técnicas Implementadas](#-técnicas-implementadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Ejemplos Prácticos](#-ejemplos-prácticos)
- [Instalación y Uso](#-instalación-y-uso)
- [Mejores Prácticas](#-mejores-prácticas)

---

## 🧠 Teoría del Renderizado Condicional

El **renderizado condicional** en React permite mostrar diferentes elementos o componentes basándose en el estado de la aplicación, props, o cualquier condición lógica.

### ¿Por qué es importante?

- **Experiencia de Usuario**: Mostrar contenido relevante según el contexto
- **Performance**: Evitar renderizar elementos innecesarios
- **Interactividad**: Responder dinámicamente a las acciones del usuario
- **Estados de la App**: Manejar loading, errores, datos vacíos, etc.

### Principios Fundamentales

1. **Expresiones JavaScript**: React evalúa expresiones JS dentro de `{}`
2. **Valores Falsy**: `false`, `null`, `undefined` no se renderizan
3. **Componente como Valor**: Los componentes son valores que pueden asignarse condicionalmente
4. **Inmutabilidad**: Las condiciones deben basarse en estado inmutable

---

## 🎯 Técnicas Implementadas

### 1. **if/else Statement** 
```jsx
// Dentro del componente, antes del return
if (condition) {
  return <ComponentA />;
}
return <ComponentB />;
```
**Ventajas**: Lógica clara y legible  
**Cuándo usar**: Lógica compleja o múltiples condiciones

### 2. **return null**
```jsx
if (!show) return null;
return <Component />;
```
**Ventajas**: Componente no se renderiza en absoluto  
**Cuándo usar**: Para ocultar completamente un componente

### 3. **Operador Ternario**
```jsx
{condition ? <ComponentA /> : <ComponentB />}
```
**Ventajas**: Conciso y expresivo  
**Cuándo usar**: Alternativa simple entre dos opciones

### 4. **Operador && (Short Circuit)**
```jsx
{condition && <Component />}
```
**Ventajas**: Muy conciso para mostrar/ocultar  
**Cuándo usar**: Mostrar algo solo si se cumple una condición

### 5. **Enums/Switch Pattern**
```jsx
const statusComponents = {
  loading: <Loading />,
  success: <Success />,
  error: <Error />
};
return statusComponents[status];
```
**Ventajas**: Escalable para múltiples estados  
**Cuándo usar**: Más de 3 opciones posibles

---

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                    # Componente principal con todos los ejemplos
├── main.jsx                   # Punto de entrada de la aplicación
└── components/
    ├── LoginStatus.jsx        # Ejemplo: if/else statement
    ├── Warning.jsx           # Ejemplo: return null
    ├── LoginButton.jsx       # Ejemplo: operador ternario
    ├── Notifications.jsx     # Ejemplo: operador &&
    ├── FetchStatus.jsx       # Ejemplo: enums/switch pattern
    ├── ProductList.jsx       # Ejemplo: renderizado de listas
    ├── Card.jsx              # Componente de composición
    └── constants.js          # Enums y constantes
```

---

## 🔍 Ejemplos Prácticos

### 1. if/else Statement - `LoginStatus.jsx`
```jsx
const LoginStatus = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div style={styles.success}>✅ Usuario autenticado</div>;
  }
  return <div style={styles.error}>❌ Por favor, inicia sesión</div>;
};
```
**Caso de uso**: Mensajes de estado de autenticación

### 2. return null - `Warning.jsx`  
```jsx
const Warning = ({ show }) => {
  if (!show) return null;
  
  return (
    <div style={styles.warning}>
      ⚠️ ¡Advertencia! Revisa tu configuración
    </div>
  );
};
```
**Caso de uso**: Alertas opcionales que pueden ocultarse completamente

### 3. Operador Ternario - `LoginButton.jsx`
```jsx
const LoginButton = ({ isLoggedIn }) => (
  <button style={isLoggedIn ? styles.logout : styles.login}>
    {isLoggedIn ? '🚪 Cerrar Sesión' : '🔑 Iniciar Sesión'}
  </button>
);
```
**Caso de uso**: Botones que cambian función según el estado

### 4. Operador && - `Notifications.jsx`
```jsx
const Notifications = ({ count }) => (
  <div>
    <h3>🔔 Notificaciones</h3>
    {count > 0 && (
      <div style={styles.badge}>
        Tienes {count} notificación{count !== 1 ? 'es' : ''} nueva{count !== 1 ? 's' : ''}
      </div>
    )}
    {count === 0 && <p>No hay notificaciones</p>}
  </div>
);
```
**Caso de uso**: Mostrar contenido solo cuando hay datos relevantes

### 5. Enums/Switch Pattern - `FetchStatus.jsx`
```jsx
import { Status } from './constants.js';

const FetchStatus = ({ status }) => {
  const statusComponents = {
    [Status.LOADING]: <div style={styles.loading}>⏳ Cargando datos...</div>,
    [Status.SUCCESS]: <div style={styles.success}>✅ Datos cargados correctamente</div>,
    [Status.ERROR]: <div style={styles.error}>❌ Error al cargar los datos</div>
  };
  
  return statusComponents[status] || <div>Estado desconocido</div>;
};
```
**Caso de uso**: Estados de peticiones API, procesos de carga

### 6. Renderizado de Listas - `ProductList.jsx`
```jsx
const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    // ...más productos
  ];

  return (
    <div>
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <div style={styles.grid}>
          {products.map(product => (
            <Card key={product.id}>
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              {product.inStock ? (
                <span style={styles.inStock}>✅ En Stock</span>
              ) : (
                <span style={styles.outStock}>❌ Agotado</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
```
**Caso de uso**: Listas dinámicas con estados individuales

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd ejemplo-con-vite

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Comandos Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción  
npm run preview  # Previsualizar build de producción
npm run lint     # Ejecutar linter
```

---

## ✅ Mejores Prácticas

### 1. **Legibilidad**
- Usa nombres descriptivos para las condiciones
- Extrae lógica compleja a variables o funciones

### 2. **Mantenibilidad**
```jsx
// ❌ Evitar: condiciones anidadas complejas
{user && user.role && user.role === 'admin' && user.permissions && user.permissions.includes('create') && <AdminPanel />}

// ✅ Mejor: extraer a variable
const canShowAdminPanel = user?.role === 'admin' && user?.permissions?.includes('create');
{canShowAdminPanel && <AdminPanel />}
```


---

## 🎓 Conceptos Avanzados

### Optional Chaining
```jsx
{user?.profile?.avatar && <Avatar src={user.profile.avatar} />}
```

### Renderizado Condicional con Hooks
```jsx
const [showModal, setShowModal] = useState(false);
return (
  <>
    <button onClick={() => setShowModal(true)}>Abrir Modal</button>
    {showModal && <Modal onClose={() => setShowModal(false)} />}
  </>
);
```

### Componentes de Orden Superior (HOC)
```jsx
const withAuth = (Component) => ({ ...props }) => {
  const { user } = useAuth();
  return user ? <Component {...props} /> : <Login />;
};
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🏷️ Tags

`#React` `#JavaScript` `#ConditionalRendering` `#Vite` `#Frontend` `#Components` `#StateManagement` `#UIPatterns`