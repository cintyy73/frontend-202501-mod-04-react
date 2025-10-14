import Card from './Card.jsx';

/**
 * 🛍️ COMPONENTE PRODUCT LIST
 * 
 * 📚 PROPÓSITO:
 * - Demuestra renderizado de listas con .map()
 * - Usa el componente Card para mostrar información de productos
 * - Combina renderizado condicional con renderizado de listas
 * 
 * 🔄 TÉCNICAS USADAS:
 * - Array.map() para renderizar listas
 * - Renderizado condicional con &&
 * - Composición de componentes con children
 * - Key prop para optimización de React
 */

const ProductList = () => {
  // 📦 Array de productos de ejemplo
  const productos = [
    {
      id: 1,
      nombre: "Laptop Gaming",
      precio: 1299.99,
      categoria: "Tecnología",
      disponible: true,
      descripcion: "Laptop de alto rendimiento para gaming y trabajo profesional."
    },
    {
      id: 2,
      nombre: "Auriculares Bluetooth",
      precio: 89.99,
      categoria: "Audio",
      disponible: true,
      descripcion: "Auriculares inalámbricos con cancelación de ruido activa."
    },
    {
      id: 3,
      nombre: "Smartphone Premium",
      precio: 899.99,
      categoria: "Tecnología",
      disponible: false,
      descripcion: "Teléfono inteligente con cámara profesional y pantalla OLED."
    },
    {
      id: 4,
      nombre: "Cafetera Automática",
      precio: 299.99,
      categoria: "Hogar",
      disponible: true,
      descripcion: "Cafetera programable con molinillo integrado y pantalla táctil."
    },
    {
      id: 5,
      nombre: "Monitor 4K",
      precio: 599.99,
      categoria: "Tecnología",
      disponible: false,
      descripcion: "Monitor Ultra HD de 27 pulgadas para diseño y gaming."
    }
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* 📋 Título de la sección */}
      <h1 style={{ 
        textAlign: "center", 
        color: "#1e293b",
        marginBottom: "30px",
        fontSize: "2rem"
      }}>
        🛍️ Catálogo de Productos
      </h1>

      {/* 📊 Estadísticas usando renderizado condicional */}
      <div style={{
        backgroundColor: "#f0f9ff",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "30px",
        border: "1px solid #0ea5e9"
      }}>
        <p style={{ margin: 0, color: "#0369a1", fontWeight: "bold" }}>
          📈 Total de productos: {productos.length} | 
          ✅ Disponibles: {productos.filter(p => p.disponible).length} | 
          ❌ Agotados: {productos.filter(p => !p.disponible).length}
        </p>
      </div>

      {/* 🔄 Renderizado condicional: si no hay productos */}
      {productos.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#fef2f2",
          borderRadius: "8px",
          border: "1px solid #fecaca"
        }}>
          <p style={{ color: "#dc2626", fontSize: "1.2rem" }}>
            📭 No hay productos disponibles
          </p>
        </div>
      )}

      {/* 🗂️ Renderizado de lista usando .map() */}
      {productos.map((producto, index) => (
        // <Card key={producto.id}>
        <Card key={index}>

          {/* 🎯 Contenido dinámico que va dentro de cada Card */}
          <div style={{ textAlign: "left" }}>
            {/* 📝 Información del producto */}
            <h2 style={{ 
              color: "#1e293b", 
              marginTop: 0,
              marginBottom: "10px",
              fontSize: "1.3rem"
            }}>
              {producto.nombre}
            </h2>

            {/* 💰 Precio con estilo destacado */}
            <p style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#059669",
              margin: "10px 0"
            }}>
              ${producto.precio}
            </p>

            {/* 🏷️ Categoría */}
            <span style={{
              backgroundColor: "#e0e7ff",
              color: "#3730a3",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "bold"
            }}>
              📁 {producto.categoria}
            </span>

            {/* ✅❌ Estado de disponibilidad con renderizado condicional */}
            <div style={{ margin: "15px 0" }}>
              {producto.disponible ? (
                <span style={{
                  backgroundColor: "#dcfce7",
                  color: "#166534",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  border: "1px solid #bbf7d0"
                }}>
                  ✅ Disponible
                </span>
              ) : (
                <span style={{
                  backgroundColor: "#fee2e2",
                  color: "#dc2626",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  border: "1px solid #fecaca"
                }}>
                  ❌ Agotado
                </span>
              )}
            </div>

            {/* 📄 Descripción */}
            <p style={{
              color: "#64748b",
              lineHeight: "1.5",
              marginTop: "15px",
              fontStyle: "italic"
            }}>
              {producto.descripcion}
            </p>

            {/* 🛒 Botón de compra con renderizado condicional */}
            {producto.disponible ? (
              <button style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "15px",
                fontSize: "0.95rem"
              }}>
                🛒 Agregar al Carrito
              </button>
            ) : (
              <button style={{
                backgroundColor: "#9ca3af",
                color: "#6b7280",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "not-allowed",
                marginTop: "15px",
                fontSize: "0.95rem"
              }} disabled>
                🚫 No Disponible
              </button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;