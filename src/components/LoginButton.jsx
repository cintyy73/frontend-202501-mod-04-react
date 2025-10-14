/**
 * ❓ TÉCNICA 3: OPERADOR TERNARIO
 * 
 * 📚 TEORÍA:
 * - Sintaxis: condition ? valueIfTrue : valueIfFalse
 * - Es la única forma de renderizado condicional que funciona DENTRO del JSX
 * - Más conciso que if/else para condiciones simples
 * - Ideal para alternar entre dos valores o componentes pequeños
 * 
 * ✅ CUÁNDO USAR:
 * - Condiciones simples con exactamente dos alternativas
 * - Cambiar texto, clases CSS, o props dinámicamente
 * - Dentro del JSX cuando necesitas inline conditional
 * - Alternativas cortas y simples
 * 
 * ⚠️ CUIDADOS:
 * - Puede volverse ilegible con condiciones complejas
 * - Evitar anidar múltiples ternarios
 * - No usar para lógica compleja
 */
const LoginButton = ({ isLoggedIn }) => {
  // 🎨 También usamos operador ternario para estilos condicionales
  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
    ...(isLoggedIn ? {
      backgroundColor: "#ef4444",
      color: "white",
      boxShadow: "0 4px 6px rgba(239, 68, 68, 0.3)"
    } : {
      backgroundColor: "#3b82f6",
      color: "white",
      boxShadow: "0 4px 6px rgba(59, 130, 246, 0.3)"
    })
  };

  return (
    <button style={buttonStyle}>
      {/* 🔄 Operador ternario inline: condition ? opciónA : opciónB */}
      {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
    </button>
  );
};

export default LoginButton;