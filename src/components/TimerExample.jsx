import { useState, useEffect } from 'react';
import './styles.css';



/**
 * 🎯 ACTIVIDAD 1: Temporizador con setInterval
 * 
 * Conceptos clave:
 * - setInterval para ejecutar código repetidamente
 * - clearInterval para limpiar el intervalo
 * - Cleanup function para evitar memory leaks
 * - Función en setState para obtener el valor actual
 */
function TimerExample() {
  // 📦 ESTADOS
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // 🎬 EFECTO: Se ejecuta cuando 'isRunning' cambia
  useEffect(() => {
    // Si está pausado, no hacer nada
    if (!isRunning) {
      console.log('⏸️ Timer pausado, no se ejecuta el efecto');
      return;
    }

    // 1️⃣ CREACIÓN DEL INTERVALO
    console.log('▶️ Timer iniciado - Creando intervalo');
    
    // setInterval ejecuta una función cada X milisegundos
    // Guardamos el ID para poder limpiarlo después
    const intervalId = setInterval(() => {
      console.log('⏰ Tick del timer');
      
      // ⚠️ IMPORTANTE: Usar función para obtener el valor actual
      // Si usamos 'seconds + 1', el valor quedaría "congelado"
      setSeconds(prevSeconds => prevSeconds + 1);
      
      // ❌ MAL: setSeconds(seconds + 1);
      // Esto NO funciona porque 'seconds' queda en el valor inicial
    }, 1000); // 1000ms = 1 segundo

    // 2️⃣ CLEANUP FUNCTION
    // Esta función se ejecuta en dos momentos:
    // - Cuando el componente se desmonta
    // - Antes de ejecutar el efecto de nuevo (cuando cambia isRunning)
    return () => {
      console.log('🧹 Limpiando intervalo (ID:', intervalId, ')');
      // ⚠️ CRÍTICO: Siempre limpiar intervalos
      // Si no haces esto, crearás múltiples intervalos (memory leak)
      clearInterval(intervalId);
    };

    // 3️⃣ DEPENDENCIAS
    // El efecto se ejecuta cuando 'isRunning' cambia
    // Si el array estuviera vacío [], solo se ejecutaría al montar
  }, [isRunning]);

  // 🎨 RENDER
  return (
    <div className="activity-container">
      <h2>⏱️ Temporizador con setInterval</h2>
      
      {/* Mostrar segundos con formato */}
      <div className="timer-display">
        <span className="timer-number">{seconds}</span>
        <span className="timer-label">segundos</span>
      </div>

      {/* Controles */}
      <div className="button-group">
        <button 
          onClick={() => setIsRunning(!isRunning)}
          className={isRunning ? 'btn-warning' : 'btn-success'}
        >
          {isRunning ? '⏸️ Pausar' : '▶️ Reanudar'}
        </button>
        
        <button 
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
          className="btn-danger"
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Información educativa */}
      <div className="info-box">
        <p><strong>💡 Conceptos importantes:</strong></p>
        <ul>
          <li>✅ <code>setInterval</code> ejecuta código cada X milisegundos</li>
          <li>✅ <code>clearInterval</code> cancela el intervalo</li>
          <li>✅ Siempre guardar el ID del intervalo para limpiarlo</li>
          <li>✅ Usar función en setState: <code>prev {'=>'} prev + 1</code></li>
          <li>⚠️ Sin cleanup = memory leak</li>
        </ul>
      </div>

      {/* Consola virtual (para enseñar) */}
      <div className="console-box">
        <p><strong>📟 Abre la consola del navegador (F12) para ver:</strong></p>
        <ul>
          <li>▶️ "Timer iniciado" cuando se crea el intervalo</li>
          <li>⏰ "Tick del timer" cada segundo</li>
          <li>🧹 "Limpiando intervalo" cuando se pausa o desmonta</li>
        </ul>
      </div>
    </div>
  );
}

export default TimerExample;
