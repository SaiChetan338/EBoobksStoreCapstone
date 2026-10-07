import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    const response = await api.get("/products");

    setProducts(response.data);
  };

  const addProduct = async () => {

    await api.post("/products", {
      title,
      author,
      price
    });

    setTitle("");
    setAuthor("");
    setPrice("");

    loadProducts();
  };

  const addToCart = async (product) => {

    await api.post("/cart", {
      productId: product.id,
      productTitle: product.title,
      quantity: 1
    });

    alert("Added To Cart");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Home</h1>

      <h2>Add Book</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={addProduct}>
        Add Book
      </button>

      <hr />

      <h2>Books</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default Home;

