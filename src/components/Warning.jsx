/**
 * 🚫 TÉCNICA 2: RETURN NULL
 * 
 * 📚 TEORÍA:
 * - Cuando un componente retorna 'null', React no renderiza nada
 * - Es la forma más eficiente de "ocultar" un componente completamente
 * - React no crea ningún nodo DOM cuando se retorna null
 * - No afecta los lifecycle methods del componente padre
 * 
 * ✅ CUÁNDO USAR:
 * - Componentes completamente opcionales
 * - Mostrar/ocultar basado en permisos o condiciones
 * - Evitar renderizar elementos vacíos o innecesarios
 * - Optimizar performance al no crear elementos DOM
 * 
 * 💡 BENEFICIOS:
 * - Performance óptima (no se crea DOM)
 * - Código limpio y expresivo
 * - Funciona bien con renderizado condicional simple
 */
const Warning = ({ show }) => {
  // 🔍 Early return: si no debe mostrarse, retornamos null inmediatamente
  if (!show) return null;
  
  // ✅ Si debe mostrarse, retornamos el JSX normal
  return (
    <p style={{ 
      color: "#f59e0b", 
      backgroundColor: "#fef3c7", 
      padding: "12px", 
      borderRadius: "8px", 
      border: "2px solid #f59e0b",
      fontWeight: "bold",
      boxShadow: "0 4px 6px rgba(245, 158, 11, 0.1)",
      width: "280px"
    }}>
      ⚠️ Advertencia importante!
    </p>
  );
};

export default Warning;