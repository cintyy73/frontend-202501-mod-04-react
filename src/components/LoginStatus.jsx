/**
 * 🔀 TÉCNICA 1: if/else STATEMENT
 * 
 * 📚 TEORÍA:
 * - Es la forma más tradicional y explícita de renderizado condicional
 * - Permite lógica compleja con múltiples líneas antes del return
 * - Ideal cuando necesitas ejecutar código adicional según la condición
 * - Muy legible para condiciones mutuamente excluyentes
 * 
 * ✅ CUÁNDO USAR:
 * - Lógica compleja con múltiples líneas
 * - Necesitas ejecutar código antes del return
 * - Condiciones que se excluyen mutuamente
 * - Cuando la legibilidad es más importante que la concisión
 * 
 * ⚠️ DESVENTAJAS:
 * - Más verboso que otras técnicas
 * - No se puede usar directamente dentro del JSX
 * - Requiere múltiples returns
 */
const LoginStatus = ({ isLoggedIn }) => {
  // 🔍 Evaluamos la condición con if/else tradicional
  if (isLoggedIn) {
    return (
      <p style={{ 
        color: "#22c55e", 
        backgroundColor: "#dcfce7", 
        padding: "10px", 
        borderRadius: "8px", 
        border: "2px solid #22c55e",
        fontWeight: "bold",
        width: "250px"
      }}>
        ✅ Bienvenido usuario
      </p>
    );
  } else {
    // 🔄 Else maneja la condición opuesta de manera explícita
    return (
      <p style={{ 
        color: "#ef4444", 
        backgroundColor: "#fee2e2", 
        padding: "10px", 
        borderRadius: "8px", 
        border: "2px solid #ef4444",
        fontWeight: "bold",
        width: "250px"
      }}>
        ❌ Por favor inicia sesión
      </p>
    );
  }
};

export default LoginStatus;