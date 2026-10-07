import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div>

        <nav
          style={{
            backgroundColor: "#333",
            padding: "15px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            E-Book Store
          </span>

          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "15px",
            }}
          >
            Home
          </Link>

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Cart
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;