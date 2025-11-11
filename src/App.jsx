import { useState } from "react";
import "./components/MiniEcommerce.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([
    { id: 1, nombre: "Laptop", precio: 1200000, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25000, stock: 10 },
    { id: 3, nombre: "Teclado", precio: 45000, stock: 6 },
    { id: 4, nombre: "Monitor", precio: 300000, stock: 3 },
    { id: 5, nombre: "Auriculares", precio: 80000, stock: 4 },
    { id: 6, nombre: "Cámara Web", precio: 60000, stock: 2 },
    { id: 7, nombre: "Impresora", precio: 200000, stock: 3 },
    { id: 8, nombre: "Disco Externo", precio: 150000, stock: 5 },
  ]);

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBuy = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.stock > 0) {
          setTotal((prev) => prev + product.precio);
          setQuantity((prev) => prev + 1);
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );
  };

  return (
    <div className="mini-ecommerce-container">
      <h1>Mini E-Commerce</h1>
       <div className="purchase-summary">
      <h2>Purchase Summary</h2>
      <div className="summary-stats">
        <div className="stat-item">
          <span className="stat-label">Products purchased:</span>
          <span className="stat-value">{quantity}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total spent:</span>
          <span className="stat-value total-amount">${total}</span>
        </div>
      </div>
    </div>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={() => handleBuy(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
