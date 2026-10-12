function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "16px", color: "#ffffff" }}>
        <h3>{product.title}</h3>

        <p>Author: {product.author}</p>

        <p>Category: {product.category}</p>

        <h2>₹{product.price}</h2>

        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;