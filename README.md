# Clase 4: Renderizado Condicional (Parte 1)

## 🎯 Objetivo
Aprender las distintas formas de **mostrar u ocultar elementos en React** dependiendo de una condición.

---

## 📚 Teoría

En React podemos decidir qué se renderiza en pantalla usando diferentes técnicas de **renderizado condicional**:

1. **if / else** → Permite elegir entre varias ramas de ejecución.  
2. **null** → Cuando queremos **no renderizar nada**.  
3. **Operador ternario `? :`** → Ideal para condiciones simples dentro del `return`.  
4. **Circuito corto con `&&`** → Se usa para mostrar algo **solo si** una condición se cumple.  
5. **Enums (constantes de estado)** → Facilitan manejar múltiples valores fijos como “loading”, “success”, “error”.

---

## 📝 Ejemplos

### 1. if / else
```jsx
function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Bienvenido usuario</p>;
  }
  return <p>Por favor inicia sesión</p>;
}
2. null (no renderizar nada)
jsx
Copiar código
function Warning({ show }) {
  if (!show) {
    return null; 
  }
  return <p style={{ color: "red" }}>⚠️ Advertencia!</p>;
}
3. Operador ternario
jsx
Copiar código
function Button({ isLoggedIn }) {
  return (
    <button>
      {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
    </button>
  );
}
4. Circuito corto con &&
jsx
Copiar código
function Notifications({ count }) {
  return (
    <div>
      <h3>Notificaciones</h3>
      {count > 0 && <p>Tienes {count} nuevas notificaciones</p>}
    </div>
  );
}
5. Enums para múltiples estados
jsx
Copiar código
const Status = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

function FetchStatus({ status }) {
  if (status === Status.LOADING) return <p>Cargando...</p>;
  if (status === Status.SUCCESS) return <p>Datos cargados ✅</p>;
  if (status === Status.ERROR) return <p>Error ❌</p>;
  return null;
}
🏋️ Actividades rápidas
UserGreeting
Crear un componente que muestre "Hola [nombre]" si recibe un nombre por props, o nada si no recibe nada.

Online / Offline Button
Mostrar un botón que diga "🟢 Online" si isOnline === true, y "🔴 Offline" si no.

Score Message
Mostrar "🎉 Felicitaciones" solo si score > 90 usando &&.

Traffic Light
Usar un enum para manejar los estados de un semáforo: "red", "yellow", "green".

🛠️ Proyecto práctico (1h)
Mini Login Flow

Crear un componente App con un estado isLoggedIn (true/false).

Si está logueado, mostrar un mensaje de bienvenida y un botón para cerrar sesión.

Si no está logueado, mostrar un formulario de login.

Mostrar un aviso "⚠️ Usuario bloqueado" solo si isBlocked === true usando &&.

Manejar un status (loading, success, error) con un “enum” para mostrar distintos mensajes.

✅ Conclusión
if/else → Más flexible, pero menos compacto.

null → Para no renderizar nada.

? : → Condiciones rápidas y legibles.

&& → Ideal para mostrar algo solo si la condición es verdadera.

enum → Organización clara cuando hay varios estados posibles.