import { useEffect, useState } from "react";
import api from "../services/api";

function Cart() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {

    const response = await api.get("/cart");

    setItems(response.data);
  };

  const placeOrder = () => {

    alert("Order Placed Successfully");

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>No Items In Cart</p>
      ) : (
        <>
          {items.map((item) => (

            <div
              key={item.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px"
              }}
            >
              <h3>{item.productTitle}</h3>

              <p>
                Quantity: {item.quantity}
              </p>

            </div>

          ))}

          <button
            onClick={placeOrder}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Place Order
          </button>

        </>
      )}

    </div>
  );
}

export default Cart;