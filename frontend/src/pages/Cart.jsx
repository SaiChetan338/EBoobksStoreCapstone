
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);

      const response = await api.get("/cart");
      setItems(response.data);
      setError("");
    } catch (err) {
      console.error("Error loading cart:", err);
      setError("Unable to load cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      await loadCart();
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Unable to remove item. Please try again.");
    }
  };

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );

  const deliveryCharge = 0;
  const grandTotal = subtotal + deliveryCharge;

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return "";

    if (
      imageUrl.startsWith("http://") ||
      imageUrl.startsWith("https://") ||
      imageUrl.startsWith("data:")
    ) {
      return imageUrl;
    }

    return `http://localhost:8080${
      imageUrl.startsWith("/") ? "" : "/"
    }${imageUrl}`;
  };

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "25px",
        alignItems: "flex-start",
        flexWrap: "wrap",
        color: "#ffffff",
        minHeight: "80vh",
      }}
    >
      {/* Cart Items */}
      <div
        style={{
          flex: "2 1 500px",
          minWidth: 0,
        }}
      >
        <h1>Shopping Cart</h1>

        {error && (
          <div
            style={{
              backgroundColor: "#7f1d1d",
              color: "#ffffff",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        {loading ? (
          <div
            style={{
              backgroundColor: "#1f2937",
              borderRadius: "12px",
              padding: "25px",
            }}
          >
            Loading your cart...
          </div>
        ) : items.length === 0 ? (
          <div
            style={{
              backgroundColor: "#1f2937",
              borderRadius: "12px",
              padding: "25px",
            }}
          >
            <p>Your cart is empty.</p>

            <button
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                border: "none",
                padding: "12px 18px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#1f2937",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              {/* Book Cover Image */}
              <div
                style={{
                  width: "140px",
                  height: "190px",
                  flexShrink: 0,
                  backgroundColor: "#334155",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.imageUrl ? (
                  <img
                    src={getImageUrl(item.imageUrl)}
                    alt={item.productTitle || "Book cover"}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";

                      const fallback =
                        e.currentTarget.nextElementSibling;

                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : null}

                <div
                  style={{
                    display: item.imageUrl ? "none" : "flex",
                    width: "100%",
                    height: "100%",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    overflowWrap: "anywhere",
                  }}
                >
                  {item.productTitle || "Book cover unavailable"}
                </div>
              </div>

              {/* Book Details */}
              <div
                style={{
                  flex: "1 1 220px",
                  minWidth: 0,
                  padding: "20px",
                  overflowWrap: "anywhere",
                }}
              >
                <h2 style={{ marginTop: 0 }}>
                  {item.productTitle || "Untitled Book"}
                </h2>

                <p>
                  Author: {item.author || "Unknown"}
                </p>

                <p>
                  Category: {item.category || "Uncategorized"}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  Price: ₹{formatPrice(item.price)}
                </p>

                <p>
                  Total: ₹
                  {formatPrice(
                    Number(item.price || 0) *
                      Number(item.quantity || 0)
                  )}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div
        style={{
          flex: "1 1 250px",
          minWidth: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#111827",
            borderRadius: "12px",
            padding: "25px",
            position: "sticky",
            top: "20px",
          }}
        >
          <h2>Order Summary</h2>

          <hr
            style={{
              borderColor: "#374151",
              margin: "20px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <span>Subtotal</span>
            <span>₹{formatPrice(subtotal)}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <span>Delivery</span>
            <span>₹{formatPrice(deliveryCharge)}</span>
          </div>

          <hr
            style={{
              borderColor: "#374151",
              margin: "20px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            <span>Grand Total</span>
            <span>₹{formatPrice(grandTotal)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            disabled={loading || items.length === 0}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "14px",
              backgroundColor:
                loading || items.length === 0
                  ? "#4b5563"
                  : "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor:
                loading || items.length === 0
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
