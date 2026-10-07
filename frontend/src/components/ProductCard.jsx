function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{product.title}</h3>

      <p>Author: {product.author}</p>

      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;