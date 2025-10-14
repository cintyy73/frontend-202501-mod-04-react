/**
 * ⚡ TÉCNICA 4: OPERADOR AND (&&) - CIRCUITO CORTO
 * 
 * 📚 TEORÍA:
 * - Sintaxis: condition && <Component />
 * - Aprovecha el comportamiento de cortocircuito de JavaScript
 * - Si la primera condición es falsy, no evalúa la segunda parte
 * - Si es truthy, devuelve la segunda parte (el JSX)
 * 
 * ✅ CUÁNDO USAR:
 * - Mostrar algo SOLO si se cumple la condición
 * - No hay alternativa (no necesitas un "else")
 * - Renderizado condicional simple de un solo componente
 * - Mostrar/ocultar elementos opcionales
 * 
 * ⚠️ CUIDADOS IMPORTANTES:
 * - Evitar con números: {count && <Component />} puede renderizar "0"
 * - Usar: {count > 0 && <Component />} en su lugar
 * - No usar con strings vacíos, undefined, etc.
 */
const Notifications = ({ count }) => {
  return (
    <div style={{
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#f8fafc",
      border: "2px solid #e2e8f0",
      width: "300px"
    }}>
      <h3 style={{ 
        color: "#475569", 
        margin: "0 0 10px 0",
        fontSize: "18px"
      }}>
        🔔 Notificaciones
      </h3>
      {/* 
        🔍 EJEMPLO CORRECTO: count > 0 && <Component />
        ✅ Usamos count > 0 en lugar de solo count para evitar renderizar "0"
        ⚠️ Incorrecto sería: {count && ...} porque podría mostrar "0"
      */}
      {count > 0 && (
        <p style={{ 
          color: "#ffffff", 
          backgroundColor: "#8b5cf6", 
          padding: "10px", 
          borderRadius: "6px",
          margin: "0",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(139, 92, 246, 0.3)",
          width: "260px"
        }}>
          Tienes {count} nuevas notificaciones
        </p>
      )}
    </div>
  );
};

export default Notifications;