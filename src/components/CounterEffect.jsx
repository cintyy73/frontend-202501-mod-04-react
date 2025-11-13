import { useState, useEffect } from 'react';
import './styles.css';

/**
 * 🎯 ACTIVIDAD 2: Contador con efecto dependiente
 * 
 * Conceptos clave:
 * - Array de dependencias en useEffect
 * - El efecto se ejecuta cuando las dependencias cambian
 * - Cleanup function que se ejecuta antes del próximo efecto
 * - Manipulación del DOM (document.title)
 */
function CounterEffect() {
  // 📦 ESTADO
  const [count, setCount] = useState(0);

  // 🎬 EFECTO: Se ejecuta cuando 'count' cambia
  useEffect(() => {
    // 1️⃣ CÓDIGO DEL EFECTO
    // Se ejecuta DESPUÉS de que React actualiza el DOM
    console.log(`📈 El contador cambió: ${count}`);

    // Ejemplo: Cambiar el título de la pestaña del navegador
    document.title = `Contador: ${count}`;

    // Ejemplo: Mostrar alerta cuando llega a 10
    if (count === 10) {
      console.log('🎉 ¡Llegaste a 10!');
      alert('¡Felicitaciones! Llegaste a 10');
    }

    // Ejemplo: Cambiar el color de fondo según par/impar
    if (count % 2 === 0) {
      document.body.style.backgroundColor = '#f0f8ff'; // Azul claro
    } else {
      document.body.style.backgroundColor = '#fff8f0'; // Naranja claro
    }

    // 2️⃣ CLEANUP FUNCTION
    // Se ejecuta en dos momentos:
    // - ANTES del próximo efecto (cuando count vuelve a cambiar)
    // - Cuando el componente se desmonta
    return () => {
      console.log(`🧹 Limpieza antes del próximo render (count era: ${count})`);
      // Restaurar el color de fondo
      document.body.style.backgroundColor = '';
      
      // ℹ️ Nota: El cleanup tiene acceso al valor ANTERIOR de count
      // porque es un closure que "captura" el valor al momento de crearse
    };

    // 3️⃣ DEPENDENCIAS
    // [count] significa: "ejecuta este efecto cuando count cambie"
    // Si ponemos [] (vacío), solo se ejecuta al montar
    // Si no ponemos nada, se ejecuta en cada render (¡cuidado!)
  }, [count]);

  // 📊 FLUJO DE EJECUCIÓN cuando haces click:
  // 1. count cambia de X a X+1
  // 2. Se ejecuta el cleanup del efecto ANTERIOR: "Limpieza... (count era: X)"
  // 3. React actualiza el DOM (re-render)
  // 4. Se ejecuta el NUEVO efecto: "El contador cambió: X+1"
  // 5. document.title se actualiza

  // 🎨 RENDER
  return (
    <div className="activity-container">
      <h2>🔢 Contador con Efecto Dependiente</h2>

      {/* Display del contador */}
      <div className="counter-display">
        <span className="counter-number">{count}</span>
      </div>

      {/* Controles */}
      <div className="button-group">
        <button 
          onClick={() => setCount(count + 1)}
          className="btn-primary"
        >
          ➕ Incrementar
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          className="btn-secondary"
        >
          ➖ Decrementar
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className="btn-danger"
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Información visual */}
      <div className="info-box">
        <p><strong>👀 Observa estos cambios:</strong></p>
        <ul>
          <li>🏷️ El título de la pestaña cambia</li>
          <li>🎨 El color de fondo alterna (par/impar)</li>
          <li>🎉 Alerta cuando llegas a 10</li>
          <li>📟 Mensajes en la consola (F12)</li>
        </ul>
      </div>

      {/* Explicación del flujo */}
      <div className="flow-box">
        <p><strong>🔄 Flujo de ejecución:</strong></p>
        <ol>
          <li>Click en el botón → count cambia</li>
          <li>🧹 Se ejecuta el cleanup del efecto anterior</li>
          <li>🎨 React actualiza el DOM</li>
          <li>📊 Se ejecuta el nuevo efecto</li>
          <li>💾 Se guarda el cleanup para la próxima vez</li>
        </ol>
      </div>

      {/* Consola virtual */}
      <div className="console-box">
        <p><strong>📟 En la consola verás:</strong></p>
        <pre>{`
📈 El contador cambió: 0    (al montar)
📈 El contador cambió: 1    (al incrementar)
🧹 Limpieza... (count era: 0)
📈 El contador cambió: 2    (al incrementar)
🧹 Limpieza... (count era: 1)
        `}</pre>
      </div>

      {/* Conceptos clave */}
      <div className="concepts-box">
        <p><strong>💡 Conceptos importantes:</strong></p>
        <ul>
          <li>✅ El efecto se ejecuta <strong>después</strong> del render</li>
          <li>✅ El cleanup se ejecuta <strong>antes</strong> del próximo efecto</li>
          <li>✅ <code>[count]</code> en dependencias = se ejecuta cuando count cambia</li>
          <li>✅ El cleanup tiene acceso al valor anterior (closure)</li>
          <li>⚠️ Cada render crea una nueva versión del efecto</li>
        </ul>
      </div>
    </div>
  );
}

export default CounterEffect;
