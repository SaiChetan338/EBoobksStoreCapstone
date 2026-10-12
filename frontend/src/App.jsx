import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AddBook from "./pages/AddBook";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            backgroundColor: "#0f172a",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            BookVerse
          </h2>

          <div>
            <Link
              to="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                marginRight: "25px",
              }}
            >
              Home
            </Link>

            <Link
              to="/add-book"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                marginRight: "25px",
              }}
            >
              Add Book
            </Link>

            <Link
              to="/cart"
              style={{
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Cart
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
        </Routes>

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#0f172a",
            color: "#ffffff",
          }}
        >
          BookVerse © 2026
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;