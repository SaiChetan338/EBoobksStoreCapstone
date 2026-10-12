import { useState } from "react";
import api from "../services/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await api.post("/products", {
      title,
      author,
      category,
      imageUrl,
      price: Number(price),
    });

    alert("Book Added Successfully");

    setTitle("");
    setAuthor("");
    setCategory("");
    setImageUrl("");
    setPrice("");
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>Add New Book</h1>

      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        <option value="">Select Category</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Novels">Novels</option>
        <option value="Science">Science</option>
        <option value="Education">Education</option>
      </select>

      <select
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        <option value="">Select Cover</option>
        <option value="/books/atomic-habits.jpg">
          Atomic Habits Cover
        </option>
        <option value="/books/clean-code.jpg">
          Clean Code Cover
        </option>
        <option value="/books/psychology-money.jpg">
          Psychology Of Money Cover
        </option>
        <option value="/books/rich-dad-poor-dad.jpg">
          Rich Dad Poor Dad Cover
        </option>
        <option value="/books/brief-history-time.jpg">
          A Brief History Of Time Cover
        </option>
      </select>

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={addProduct}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none"
        }}
      >
        Add Book
      </button>
    </div>
  );
}

export default AddBook;