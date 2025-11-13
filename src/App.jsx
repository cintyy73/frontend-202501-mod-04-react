import { useState } from 'react';
import TimerExample from './components/TimerExample';
import CounterEffect from './components/CounterEffect';
import UsersList from './components/UsersList';
import './components/styles.css';

/**
 * 🎓 CLASE 11: useEffect en Profundidad
 * 
 * Este componente sirve como navegador entre las 3 actividades
 */
function App() {
  const [activeActivity, setActiveActivity] = useState('timer');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎓 Clase 11: useEffect en Profundidad</h1>
        <p className="subtitle">
          Aprende a usar useEffect con setInterval, dependencias y llamadas a APIs
        </p>
      </header>

      {/* Navegación entre actividades */}
      <nav className="nav-buttons">
        <button 
          onClick={() => setActiveActivity('timer')}
          className={`nav-btn ${activeActivity === 'timer' ? 'active' : ''}`}
        >
          <span className="nav-icon">⏱️</span>
          <span className="nav-text">Temporizador</span>
          <span className="nav-subtitle">setInterval + cleanup</span>
        </button>
        
        <button 
          onClick={() => setActiveActivity('counter')}
          className={`nav-btn ${activeActivity === 'counter' ? 'active' : ''}`}
        >
          <span className="nav-icon">🔢</span>
          <span className="nav-text">Contador</span>
          <span className="nav-subtitle">Dependencias + cleanup</span>
        </button>
        
        <button 
          onClick={() => setActiveActivity('users')}
          className={`nav-btn ${activeActivity === 'users' ? 'active' : ''}`}
        >
          <span className="nav-icon">👥</span>
          <span className="nav-text">API</span>
          <span className="nav-subtitle">Fetch + AbortController</span>
        </button>
      </nav>

      {/* Contenido de la actividad seleccionada */}
      <main className="content">
        {activeActivity === 'timer' && <TimerExample />}
        {activeActivity === 'counter' && <CounterEffect />}
        {activeActivity === 'users' && <UsersList />}
      </main>

      {/* Footer con información */}
      <footer className="app-footer">
        <p>
          💡 <strong>Tip:</strong> Abre la consola del navegador (F12) 
          para ver los mensajes de los useEffect
        </p>
      </footer>
    </div>
  );
}

export default App;
