import { useState, useEffect } from 'react';
import './styles.css';


/**
 * 🎯 ACTIVIDAD 3: Consulta a una API con useEffect
 * 
 * Conceptos clave:
 * - Fetch API para hacer peticiones HTTP
 * - AbortController para cancelar peticiones
 * - Manejo de estados: loading, error, success
 * - async/await dentro de useEffect
 * - Cleanup para evitar errores con componentes desmontados
 */
function UsersList() {
  // 📦 ESTADOS
  // Necesitamos 3 estados para manejar una petición a una API
  const [users, setUsers] = useState([]);        // Datos de la API
  const [loading, setLoading] = useState(true);  // ¿Está cargando?
  const [error, setError] = useState(null);      // ¿Hubo un error?

  // 🎬 EFECTO: Se ejecuta al montar el componente
  useEffect(() => {
    console.log('🌐 Componente montado - Iniciando petición a la API');

    // 🛑 ABORT CONTROLLER
    // Permite cancelar la petición si el componente se desmonta
    // Ejemplo: Usuario navega a otra página antes de que termine la carga
    const abortController = new AbortController();
    const signal = abortController.signal;

    // 📡 FUNCIÓN ASYNC PARA FETCH
    // No podemos hacer el useEffect async directamente
    // Por eso creamos una función async dentro
    const fetchUsers = async () => {
      try {
        // 1️⃣ INICIAR: Preparar los estados
        console.log('⏳ Preparando la petición...');
        setLoading(true);
        setError(null);

        // 2️⃣ FETCH: Hacer la petición
        console.log('📡 Haciendo fetch a la API...');
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal } // 👈 Pasar el signal para poder cancelar
        );

        // 3️⃣ VERIFICAR: ¿La petición fue exitosa?
        if (!response.ok) {
          // Si el servidor responde con error (404, 500, etc.)
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 4️⃣ PARSEAR: Convertir la respuesta a JSON
        console.log('🔄 Convirtiendo respuesta a JSON...');
        const data = await response.json();

        // 5️⃣ SUCCESS: Guardar los datos
        console.log('✅ Datos recibidos correctamente:', data.length, 'usuarios');
        setUsers(data);

      } catch (err) {
        // 6️⃣ ERROR HANDLING
        console.log('⚠️ Entrando al catch, error:', err.name);

        // Si el error es porque cancelamos la petición, no hacer nada
        if (err.name === 'AbortError') {
          console.log('🛑 Petición cancelada (componente desmontado)');
          // No actualizar el estado porque el componente ya no existe
          return;
        }

        // Si es otro tipo de error, guardarlo
        console.error('❌ Error en la petición:', err);
        setError(err.message);

      } finally {
        // 7️⃣ FINALLY: Siempre se ejecuta (haya error o no)
        console.log('🏁 Finalizando petición');
        setLoading(false);
      }
    };

    // Ejecutar la función async
    fetchUsers();

    // 🧹 CLEANUP FUNCTION
    // Se ejecuta cuando el componente se desmonta
    return () => {
      console.log('🧹 Componente desmontado - Cancelando petición HTTP');
      // Abortar la petición si todavía está en progreso
      abortController.abort();
    };

    // 📋 DEPENDENCIAS
    // Array vacío [] = solo se ejecuta una vez al montar
    // Si ponemos algo aquí, se ejecutaría cada vez que cambie
  }, []);

  // 🎨 RENDER CONDICIONAL
  // Mostramos diferentes cosas según el estado
  return (
    <div className="activity-container">
      <h2>👥 Lista de Usuarios desde API</h2>

      {/* 🔄 ESTADO: LOADING */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p className="loading-text">⏳ Cargando usuarios...</p>
          <p className="loading-hint">
            (Haciendo fetch a jsonplaceholder.typicode.com)
          </p>
        </div>
      )}

      {/* ❌ ESTADO: ERROR */}
      {error && (
        <div className="error-state">
          <p className="error-title">❌ Error al cargar usuarios</p>
          <p className="error-message">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-retry"
          >
            🔄 Reintentar
          </button>
        </div>
      )}

      {/* ✅ ESTADO: SUCCESS */}
      {!loading && !error && (
        <>
          <p className="success-message">
            ✅ Se cargaron {users.length} usuarios exitosamente
          </p>
          
          <ul className="users-list">
            {users.map(user => (
              <li key={user.id} className="user-card">
                <div className="user-header">
                  <span className="user-id">#{user.id}</span>
                  <strong className="user-name">{user.name}</strong>
                </div>
                <div className="user-details">
                  <p>👤 <strong>Usuario:</strong> {user.username}</p>
                  <p>📧 <strong>Email:</strong> {user.email}</p>
                  <p>🏢 <strong>Empresa:</strong> {user.company.name}</p>
                  <p>🌐 <strong>Web:</strong> {user.website}</p>
                  <p>📍 <strong>Ciudad:</strong> {user.address.city}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Información educativa */}
      <div className="info-box">
        <p><strong>💡 Conceptos importantes:</strong></p>
        <ul>
          <li>✅ Usar 3 estados: <code>data</code>, <code>loading</code>, <code>error</code></li>
          <li>✅ <code>AbortController</code> cancela peticiones</li>
          <li>✅ <code>async/await</code> para código asíncrono</li>
          <li>✅ <code>try-catch-finally</code> para manejar errores</li>
          <li>✅ Cleanup evita errores si el componente se desmonta</li>
        </ul>
      </div>

      {/* Diagrama de estados */}
      <div className="flow-box">
        <p><strong>📊 Flujo de estados:</strong></p>
        <pre>{`
INICIO
  ↓
loading = true
  ↓
Hacer fetch()
  ↓
¿Éxito o error?
  ↙        ↘
✅ ÉXITO  ❌ ERROR
setUsers   setError
loading=   loading=
false      false
        `}</pre>
      </div>

      {/* Consola virtual */}
      <div className="console-box">
        <p><strong>📟 En la consola verás:</strong></p>
        <pre>{`
🌐 Componente montado - Iniciando petición
⏳ Preparando la petición...
📡 Haciendo fetch a la API...
🔄 Convirtiendo respuesta a JSON...
✅ Datos recibidos correctamente: 10 usuarios
🏁 Finalizando petición

(Si cambias de pestaña rápido:)
🧹 Componente desmontado - Cancelando petición
🛑 Petición cancelada (componente desmontado)
        `}</pre>
      </div>

      {/* Explicación de AbortController */}
      <div className="concepts-box">
        <p><strong>🛑 ¿Por qué usar AbortController?</strong></p>
        <p>Imagina que el usuario:</p>
        <ol>
          <li>Entra a esta página (inicia el fetch)</li>
          <li>Navega a otra página ANTES de que termine</li>
          <li>Sin AbortController, el fetch continúa</li>
          <li>Cuando llega la respuesta, intenta hacer setState</li>
          <li>❌ ERROR: El componente ya no existe</li>
        </ol>
        <p><strong>Solución:</strong> abort() cancela la petición</p>
      </div>
    </div>
  );
}

export default UsersList;
