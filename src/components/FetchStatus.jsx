import { Status } from './constants.js';

/**
 * 📊 TÉCNICA 5: ENUMS/SWITCH PATTERN
 * 
 * 📚 TEORÍA:
 * - Ideal para múltiples estados mutuamente excluyentes
 * - Los enums proporcionan constantes legibles y mantenibles
 * - Evita "magic strings" y errores de escritura
 * - Fácil de extender con nuevos estados
 * 
 * ✅ CUÁNDO USAR:
 * - Más de 2 opciones/estados posibles
 * - Estados de carga: loading, success, error, idle
 * - Máquinas de estado bien definidas
 * - Cuando los estados son mutuamente excluyentes
 * 
 * 💡 BENEFICIOS:
 * - Código más mantenible y legible
 * - IntelliSense/autocompletado en el IDE
 * - Evita errores de tipeo en strings
 * - Fácil refactoring si cambian los valores
 * 
 * 🔄 ALTERNATIVAS:
 * - Switch statement (menos común en React)
 * - Objeto con funciones (pattern matching)
 * - Map/diccionario de componentes
 */
const FetchStatus = ({ status }) => {
  // 🎨 Función helper para obtener estilos según el estado
  const getStatusStyle = () => {
    switch (status) {
      case Status.LOADING:
        return {
          color: "#0ea5e9",
          backgroundColor: "#e0f2fe",
          border: "2px solid #0ea5e9",
          animation: "pulse 2s infinite"
        };
      case Status.SUCCESS:
        return {
          color: "#22c55e",
          backgroundColor: "#dcfce7",
          border: "2px solid #22c55e"
        };
      case Status.ERROR:
        return {
          color: "#ef4444",
          backgroundColor: "#fee2e2",
          border: "2px solid #ef4444"
        };
      default:
        return {};
    }
  };

  const baseStyle = {
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    margin: "5px 0",
    width: "300px",
    ...getStatusStyle()
  };

  // 🔍 Múltiples if statements para cada estado del enum
  // ✅ Cada estado es mutuamente excluyente
  if (status === Status.LOADING) return <p style={baseStyle}>⏳ Cargando...</p>;
  if (status === Status.SUCCESS) return <p style={baseStyle}>✅ Datos cargados correctamente</p>;
  if (status === Status.ERROR) return <p style={baseStyle}>❌ Ocurrió un error</p>;
  
  // 🚫 Estado no reconocido o null - no renderizamos nada
  return null;
};

export default FetchStatus;