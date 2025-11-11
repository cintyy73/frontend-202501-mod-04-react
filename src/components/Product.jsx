const Product = ({ product, addToCart }) => {
  const { nombre, stock, precio } = product;
  return (
    <div className="product-item">
      <div className="product-info">
        <h3>{nombre}</h3>
        <p>{stock}</p>
        <p>{precio}</p>
        <button
        onClick={addToCart}
         className="buy-button"
        >Comprar</button>
      </div>
    </div>
  );
};

export default Product;
