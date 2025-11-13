# Clase 11: useEffect en Profundidad

## Objetivos de la clase

Al finalizar esta clase, las alumnas serán capaces de:
- ✅ Usar `useEffect` con diferentes arrays de dependencias
- ✅ Implementar funciones de limpieza (cleanup)
- ✅ Realizar llamadas a APIs con manejo de estados
- ✅ Usar `setInterval` con limpieza correcta
- ✅ Cancelar peticiones HTTP con `AbortController`

---

## 📚 Teoría Rápida

### ¿Qué es useEffect?

`useEffect` es un Hook que nos permite ejecutar código cuando:
1. El componente se monta (primera vez que aparece)
2. El componente se actualiza (cuando cambia alguna dependencia)
3. El componente se desmonta (cuando desaparece)

### Sintaxis básica

```javascript
useEffect(() => {
  // Código del efecto
  
  return () => {
    // Código de limpieza (opcional)
  };
}, [dependencias]); // Array de dependencias
```

### Tipos de dependencias

| Array de dependencias | Cuándo se ejecuta |
|----------------------|-------------------|
| `[]` (vacío) | Solo al montar el componente |
| `[count, name]` | Al montar + cuando count o name cambien |
| Sin array | En cada render (¡cuidado!) |

---

## 🎯 Actividad 1: Temporizador con setInterval

### Objetivo
Crear un reloj/contador que use `setInterval` con limpieza correcta.

### Paso a paso

#### Paso 1: Crear el archivo
Crear `ejemplos/src/clase-11/TimerExample.jsx`

#### Paso 2: Estructura básica
```javascript
import { useState, useEffect } from 'react';

function TimerExample() {
  const [seconds, setSeconds] = useState(0);
  
  return (
    <div>
      <h2>Temporizador</h2>
      <p>Segundos: {seconds}</p>
    </div>
  );
}

export default TimerExample;
```

#### Paso 3: Agregar useEffect con setInterval
```javascript
useEffect(() => {
  // 1️⃣ CREACIÓN: Este código se ejecuta al montar el componente
  console.log('🟢 Componente montado - Iniciando timer');
  
  // setInterval ejecuta una función cada X milisegundos
  const intervalId = setInterval(() => {
    // Usar función en setState para obtener el valor actual
    setSeconds(prevSeconds => prevSeconds + 1);
  }, 1000); // 1000ms = 1 segundo
  
  // 2️⃣ LIMPIEZA: Esta función se ejecuta al desmontar
  return () => {
    console.log('🔴 Componente desmontado - Limpiando timer');
    // ⚠️ IMPORTANTE: Siempre limpiar intervalos para evitar memory leaks
    clearInterval(intervalId);
  };
}, []); // Array vacío = solo se ejecuta una vez al montar
```

#### Paso 4: Agregar botones de control
```javascript
const [isRunning, setIsRunning] = useState(true);

// Modificar useEffect para que respete isRunning
useEffect(() => {
  if (!isRunning) return; // Si está pausado, no hacer nada
  
  console.log('▶️ Timer iniciado');
  const intervalId = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);
  
  return () => {
    console.log('⏸️ Timer limpiado');
    clearInterval(intervalId);
  };
}, [isRunning]); // Ahora depende de isRunning

// En el JSX:
<button onClick={() => setIsRunning(!isRunning)}>
  {isRunning ? 'Pausar' : 'Reanudar'}
</button>
<button onClick={() => { setSeconds(0); setIsRunning(false); }}>
  Reiniciar
</button>
```

### Conceptos clave
- ✅ `setInterval` necesita **siempre** un `clearInterval` en el cleanup
- ✅ Usar función en `setState` cuando actualizas basándote en el valor anterior
- ✅ El cleanup se ejecuta antes de que el efecto se vuelva a ejecutar
- ✅ Guardar el ID del intervalo para poder limpiarlo después

---

## 🎯 Actividad 2: Contador con efecto dependiente

### Objetivo
Aprender a usar el array de dependencias para que el efecto se ejecute cuando cambia el estado.

### Paso a paso

#### Paso 1: Crear el archivo
Crear `ejemplos/src/clase-11/CounterEffect.jsx`

#### Paso 2: Estructura básica con estado
```javascript
import { useState, useEffect } from 'react';

function CounterEffect() {
  // Estado inicial del contador
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default CounterEffect;
```

#### Paso 3: Agregar useEffect que observe count
```javascript
useEffect(() => {
  // 📊 EFECTO: Se ejecuta cuando 'count' cambia
  console.log(`📈 El contador cambió: ${count}`);
  
  // Ejemplo: Cambiar el título de la página
  document.title = `Contador: ${count}`;
  
  // 🧹 CLEANUP: Se ejecuta ANTES del próximo efecto
  return () => {
    console.log(`🧹 Limpieza antes del próximo render (count era: ${count})`);
  };
}, [count]); // ⚠️ IMPORTANTE: count en el array de dependencias
```

#### Paso 4: Entender el flujo de ejecución
```javascript
// Flujo cuando haces click en el botón:
// 1. count cambia de 0 a 1
// 2. Se ejecuta el cleanup del efecto anterior: "Limpieza... (count era: 0)"
// 3. React actualiza el DOM
// 4. Se ejecuta el nuevo efecto: "El contador cambió: 1"
// 5. document.title se actualiza a "Contador: 1"
```

#### Paso 5: Agregar más lógica al efecto
```javascript
useEffect(() => {
  console.log(`📈 El contador cambió: ${count}`);
  document.title = `Contador: ${count}`;
  
  // Ejemplo: Mostrar alerta si llega a 10
  if (count === 10) {
    alert('¡Llegaste a 10!');
  }
  
  // Ejemplo: Cambiar color del fondo según el número
  if (count % 2 === 0) {
    document.body.style.backgroundColor = '#f0f0f0';
  } else {
    document.body.style.backgroundColor = '#ffffff';
  }
  
  return () => {
    console.log(`🧹 Limpieza antes del próximo render (count era: ${count})`);
    // Limpiar estilos
    document.body.style.backgroundColor = '';
  };
}, [count]);
```

### Conceptos clave
- ✅ El efecto se ejecuta **después** del render
- ✅ El cleanup se ejecuta **antes** del próximo efecto
- ✅ Si pones `count` en las dependencias, el efecto se ejecuta cada vez que `count` cambia
- ✅ El cleanup es útil para deshacer cambios (estilos, suscripciones, etc.)

### Diagrama de ejecución
```
Usuario hace click → count: 0 → 1
                      ↓
          1. Cleanup anterior (count era 0)
                      ↓
          2. React actualiza el DOM
                      ↓
          3. Nuevo efecto (count es 1)
                      ↓
          4. Se guarda el cleanup para la próxima vez
```

---

## 🎯 Actividad 3: Consulta a una API con useEffect

### Objetivo
Hacer una petición HTTP a una API y manejar estados de carga, error y éxito.

### Paso a paso

#### Paso 1: Crear el archivo
Crear `ejemplos/src/clase-11/UsersList.jsx`

#### Paso 2: Estructura con estados múltiples
```javascript
import { useState, useEffect } from 'react';

function UsersList() {
  // 📦 ESTADOS: Necesitamos 3 estados para manejar la petición
  const [users, setUsers] = useState([]);        // Datos de la API
  const [loading, setLoading] = useState(true);   // ¿Está cargando?
  const [error, setError] = useState(null);       // ¿Hubo error?
  
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {/* Aquí mostraremos los usuarios */}
    </div>
  );
}

export default UsersList;
```

#### Paso 3: Agregar useEffect con fetch
```javascript
useEffect(() => {
  // 🌐 PETICIÓN HTTP: Se ejecuta al montar el componente
  console.log('🌐 Iniciando petición a la API...');
  
  // Función async dentro del useEffect
  const fetchUsers = async () => {
    try {
      // 1️⃣ Hacer la petición
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // 2️⃣ Verificar si fue exitosa
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      
      // 3️⃣ Convertir la respuesta a JSON
      const data = await response.json();
      
      // 4️⃣ Guardar los datos en el estado
      console.log('✅ Datos recibidos:', data);
      setUsers(data);
      setLoading(false);
      
    } catch (err) {
      // 5️⃣ Manejar errores
      console.error('❌ Error:', err);
      setError(err.message);
      setLoading(false);
    }
  };
  
  fetchUsers();
  
}, []); // Array vacío = solo al montar
```

#### Paso 4: Implementar AbortController para cleanup
```javascript
useEffect(() => {
  console.log('🌐 Iniciando petición a la API...');
  
  // 🛑 AbortController: Permite cancelar la petición
  const abortController = new AbortController();
  const signal = abortController.signal;
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Pasar el signal al fetch
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { signal } // 👈 Esto permite cancelar la petición
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ Datos recibidos:', data.length, 'usuarios');
      setUsers(data);
      
    } catch (err) {
      // Si fue cancelada, no mostrar error
      if (err.name === 'AbortError') {
        console.log('🛑 Petición cancelada');
      } else {
        console.error('❌ Error:', err);
        setError(err.message);
      }
    } finally {
      // Siempre ejecutar esto al final
      setLoading(false);
    }
  };
  
  fetchUsers();
  
  // 🧹 CLEANUP: Cancelar petición si el componente se desmonta
  return () => {
    console.log('🧹 Componente desmontado - Cancelando petición');
    abortController.abort();
  };
}, []);
```

#### Paso 5: Renderizado condicional según el estado
```javascript
return (
  <div className="users-container">
    <h2>Lista de Usuarios</h2>
    
    {/* 🔄 LOADING: Mostrar mientras carga */}
    {loading && (
      <p className="loading">⏳ Cargando usuarios...</p>
    )}
    
    {/* ❌ ERROR: Mostrar si hubo error */}
    {error && (
      <div className="error">
        <p>❌ Error al cargar usuarios</p>
        <p>{error}</p>
      </div>
    )}
    
    {/* ✅ SUCCESS: Mostrar los usuarios */}
    {!loading && !error && (
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <br />
            📧 {user.email}
            <br />
            🏢 {user.company.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);
```

#### Paso 6: Agregar estilos (opcional)
Crear `ejemplos/src/clase-11/UsersList.css`:
```css
.users-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.loading {
  text-align: center;
  font-size: 1.2em;
  color: #666;
}

.error {
  background-color: #fee;
  border: 1px solid #fcc;
  padding: 15px;
  border-radius: 5px;
  color: #c00;
}

.users-list {
  list-style: none;
  padding: 0;
}

.users-list li {
  background: #f9f9f9;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.users-list li:hover {
  background: #f0f0f0;
  transform: translateX(5px);
  transition: all 0.3s;
}
```

### Conceptos clave
- ✅ Usar 3 estados: `data`, `loading`, `error`
- ✅ `AbortController` permite cancelar peticiones HTTP
- ✅ El cleanup evita errores si el componente se desmonta antes de que termine la petición
- ✅ Renderizado condicional según el estado
- ✅ `try-catch-finally` para manejar errores

### Diagrama de estados
```
                    INICIO
                      ↓
              loading = true
                      ↓
              Hacer fetch()
                      ↓
            ¿Éxito o error?
           ↙              ↘
    ✅ ÉXITO           ❌ ERROR
    setUsers(data)     setError(msg)
    loading = false    loading = false
```

---

## 🎨 Paso 7: Integrar todo en App.jsx

Crear `ejemplos/src/clase-11/App11.jsx`:

```javascript
import { useState } from 'react';
import TimerExample from './TimerExample';
import CounterEffect from './CounterEffect';
import UsersList from './UsersList';
import './clase-11.css';

function App11() {
  const [activeActivity, setActiveActivity] = useState('timer');

  return (
    <div className="app-container">
      <h1>Clase 11: useEffect en Profundidad</h1>
      
      {/* Navegación */}
      <nav className="nav-buttons">
        <button 
          onClick={() => setActiveActivity('timer')}
          className={activeActivity === 'timer' ? 'active' : ''}
        >
          ⏱️ Temporizador
        </button>
        <button 
          onClick={() => setActiveActivity('counter')}
          className={activeActivity === 'counter' ? 'active' : ''}
        >
          🔢 Contador con Efecto
        </button>
        <button 
          onClick={() => setActiveActivity('users')}
          className={activeActivity === 'users' ? 'active' : ''}
        >
          👥 Lista de Usuarios
        </button>
      </nav>

      {/* Contenido */}
      <main className="content">
        {activeActivity === 'timer' && <TimerExample />}
        {activeActivity === 'counter' && <CounterEffect />}
        {activeActivity === 'users' && <UsersList />}
      </main>
    </div>
  );
}

export default App11;
```

---

## 📝 Checklist de la clase

### Al finalizar, verificar que las alumnas puedan:

**Actividad 1 - Temporizador:**
- [ ] Usar `setInterval` dentro de `useEffect`
- [ ] Implementar `clearInterval` en el cleanup
- [ ] Usar función en `setState` (`prev => prev + 1`)
- [ ] Entender por qué se necesita el cleanup

**Actividad 2 - Contador:**
- [ ] Agregar dependencias al array `[count]`
- [ ] Ver en consola cuándo se ejecuta el efecto
- [ ] Ver en consola cuándo se ejecuta el cleanup
- [ ] Cambiar el título de la página con `document.title`

**Actividad 3 - API:**
- [ ] Manejar 3 estados: `loading`, `error`, `data`
- [ ] Usar `async/await` dentro de `useEffect`
- [ ] Implementar `AbortController` para cancelar peticiones
- [ ] Renderizado condicional según el estado

---

## 🎯 Ejercicios extra (si da tiempo)

### 1. Timer con múltiples velocidades
Modificar `TimerExample` para que tenga botones de velocidad: 1x, 2x, 0.5x

### 2. Búsqueda de usuarios
Modificar `UsersList` para agregar un input que filtre usuarios por nombre

### 3. Contador que guarda en localStorage
Modificar `CounterEffect` para que guarde el valor en `localStorage` y lo recupere al recargar

---

## 🐛 Errores comunes y soluciones

### Error 1: Memory leak con setInterval
```javascript
// ❌ MAL: No se limpia el intervalo
useEffect(() => {
  setInterval(() => {}, 1000);
}, []);

// ✅ BIEN: Se limpia en el cleanup
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id);
}, []);
```

### Error 2: Actualizar estado sin función
```javascript
// ❌ MAL: El valor queda "congelado"
setSeconds(seconds + 1);

// ✅ BIEN: Usa el valor actual
setSeconds(prev => prev + 1);
```

### Error 3: Fetch sin AbortController
```javascript
// ❌ MAL: No se puede cancelar
useEffect(() => {
  fetch(url).then(data => setState(data));
}, []);

// ✅ BIEN: Se puede cancelar
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  return () => controller.abort();
}, []);
```

### Error 4: useEffect sin dependencias
```javascript
// ❌ MAL: Se ejecuta en cada render
useEffect(() => {
  console.log(count);
});

// ✅ BIEN: Se ejecuta solo cuando count cambia
useEffect(() => {
  console.log(count);
}, [count]);
```

---

## 📚 Recursos adicionales

- [Documentación oficial de useEffect](https://react.dev/reference/react/useEffect)
- [Guía de cleanup functions](https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed)
- [AbortController en MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [JSON Placeholder API](https://jsonplaceholder.typicode.com/)

---

## 🎓 Resumen de conceptos

| Concepto | Explicación | Ejemplo |
|----------|-------------|---------|
| **useEffect** | Hook para efectos secundarios | `useEffect(() => {}, [])` |
| **Dependencias** | Variables que triggean el efecto | `[count, name]` |
| **Cleanup** | Limpieza antes de desmontar | `return () => clearInterval(id)` |
| **setInterval** | Ejecuta código repetidamente | `setInterval(() => {}, 1000)` |
| **clearInterval** | Cancela un intervalo | `clearInterval(id)` |
| **AbortController** | Cancela peticiones HTTP | `controller.abort()` |
| **async/await** | Manejo de promesas | `const data = await fetch()` |
