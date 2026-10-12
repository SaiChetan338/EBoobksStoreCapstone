import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] =
    useState("Credit Card");

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const [expiryDate, setExpiryDate] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [giftPoints, setGiftPoints] =
    useState("");

  const subtotal = 1398;
  const redeemed = giftPoints
    ? Number(giftPoints)
    : 0;

  const grandTotal =
    subtotal - redeemed;

  const payNow = () => {
    navigate("/success", {
      state: {
        address,
        paymentMethod,
        giftPoints,
      },
    });
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Checkout</h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: 2,
            backgroundColor: "#1f2937",
            borderRadius: "12px",
            padding: "25px",
          }}
        >

          <h2>Payment Method</h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <button
              onClick={() =>
                setPaymentMethod(
                  "Credit Card"
                )
              }
              style={{
                padding: "12px 20px",
                backgroundColor:
                  paymentMethod ===
                  "Credit Card"
                    ? "#2563eb"
                    : "#374151",
                color: "white",
                border: "none",
              }}
            >
              Credit Card
            </button>

            <button
              onClick={() =>
                setPaymentMethod(
                  "Debit Card"
                )
              }
              style={{
                padding: "12px 20px",
                backgroundColor:
                  paymentMethod ===
                  "Debit Card"
                    ? "#2563eb"
                    : "#374151",
                color: "white",
                border: "none",
              }}
            >
              Debit Card
            </button>
          </div>

          <h2>Card Details</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "15px",
            }}
          >
            <input
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                )
              }
            />

            <input
              placeholder="Name On Card"
              value={cardName}
              onChange={(e) =>
                setCardName(
                  e.target.value
                )
              }
            />

            <input
              placeholder="CVV"
              value={cvv}
              onChange={(e) =>
                setCvv(
                  e.target.value
                )
              }
            />

            <input
              placeholder="MM/YYYY"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(
                  e.target.value
                )
              }
            />
          </div>

          <h2
            style={{
              marginTop: "25px",
            }}
          >
            Delivery Address
          </h2>

          <textarea
            rows="4"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
            style={{
              width: "100%",
            }}
          />

          <h2
            style={{
              marginTop: "25px",
            }}
          >
            Gift Points
          </h2>

          <input
            placeholder="Redeem Gift Points"
            value={giftPoints}
            onChange={(e) =>
              setGiftPoints(
                e.target.value
              )
            }
          />
        </div>

        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              backgroundColor:
                "#111827",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2>
              Order Summary
            </h2>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "15px",
              }}
            >
              <span>Items</span>

              <span>3</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "15px",
              }}
            >
              <span>Subtotal</span>

              <span>
                ₹{subtotal}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "15px",
              }}
            >
              <span>
                Gift Points
              </span>

              <span>
                -₹{redeemed}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "15px",
              }}
            >
              <span>
                Delivery
              </span>

              <span>₹0</span>
            </div>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                fontSize:
                  "20px",
                fontWeight:
                  "bold",
              }}
            >
              <span>
                Grand Total
              </span>

              <span>
                ₹{grandTotal}
              </span>
            </div>

            <button
              onClick={payNow}
              style={{
                width: "100%",
                marginTop:
                  "25px",
                padding:
                  "15px",
                backgroundColor:
                  "#2563eb",
                color: "white",
                border: "none",
                borderRadius:
                  "8px",
                fontSize:
                  "16px",
              }}
            >
              Pay Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;