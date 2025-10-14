/**
 * 🃏 COMPONENTE CARD
 * 
 * 📚 PROPÓSITO:
 * - Componente reutilizable que actúa como contenedor
 * - Demuestra el patrón de composición con {children}
 * - Proporciona estructura consistente: header + contenido + footer
 * 
 * 💡 PATRÓN CHILDREN:
 * - Permite pasar JSX como prop especial llamada 'children'
 * - Hace el componente más flexible y reutilizable
 * - El contenido se pasa entre las etiquetas de apertura y cierre
 */

const Card = ({ children }) => {
  return (
    <div style={{
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      margin: "20px 0",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      overflow: "hidden"
    }}>
      {/* 📌 Header fijo para todas las cards */}
      <header style={{
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "15px",
        fontWeight: "bold",
        textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>📞 Contacto</p>
      </header>

      {/* 📄 Contenido principal de la card */}
      <div style={{ padding: "20px" }}>
        <h1 style={{ 
          color: "#1e293b",
          marginTop: 0,
          marginBottom: "15px",
          fontSize: "1.5rem"
        }}>
          Título Principal
        </h1>
        
        <p style={{ 
          color: "#64748b",
          lineHeight: "1.6",
          marginBottom: "20px"
        }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatem repudiandae quisquam veniam impedit veritatis quia dignissimos, quibusdam accusantium velit? Consequatur dolorum doloremque expedita incidunt. Cum blanditiis sapiente magni cupiditate!
        </p>

        {/* 🎯 Aquí se renderiza el contenido dinámico */}
        <div style={{
          backgroundColor: "#d9e97dff",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0"
        }}>
          {children}
        </div>
      </div>

      {/* 🦶 Footer fijo para todas las cards */}
      <footer style={{
        backgroundColor: "#f1f5f9",
        padding: "15px",
        borderTop: "1px solid #e2e8f0",
        fontSize: "0.875rem",
        color: "#64748b"
      }}>
        <p style={{ margin: 0, lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore velit ipsum, quasi, asperiores perferendis quis voluptatibus facilis dolore ratione vero temporibus quibusdam, consequuntur debitis mollitia illo? Ab, ullam provident.
        </p>
      </footer>
    </div>
  );
};

export default Card;