import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  const addToCart = async (product) => {
    await api.post("/cart", {
      productId: product.id,
      productTitle: product.title,
      author: product.author,
      category: product.category,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });

    alert("Book added to cart");
  };

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === ""
        ? true
        : product.category === selectedCategory
    )
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );

  return (
    <div className="container">
      <div className="sidebar">
        <h3>Categories</h3>

        <p onClick={() => setSelectedCategory("")}>
          All
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Technology")
          }
        >
          Technology
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Business")
          }
        >
          Business
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Self-Help")
          }
        >
          Self-Help
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Novels")
          }
        >
          Novels
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Science")
          }
        >
          Science
        </p>

        <p
          onClick={() =>
            setSelectedCategory("Education")
          }
        >
          Education
        </p>
      </div>

      <div className="content">
        <div
          style={{
            backgroundColor: "#1f2937",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h1>Discover Your Next Book</h1>

          <p>
            Explore our collection of technology,
            business, education, self-help,
            science and novels.
          </p>
        </div>

        <input
          className="search-box"
          placeholder="Search books..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
        />

        <h2>Book Catalogue</h2>

        <p>
          {filteredProducts.length} Books Available
        </p>

        <div className="book-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;