// ServiceCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, imageSrc, price, onAmountChange }) => {
  const storageKey = `amount${id}`;

  const getStoredAmount = () => {
    try {
      const storedValue = localStorage.getItem(storageKey);
      return storedValue ? JSON.parse(storedValue) : 1;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return 1; // Default to 1 if there's an error
    }
  };

  const [amount, setAmount] = useState(() => getStoredAmount());

  const handleIncrement = () => {
    const newAmount = amount + 1;
    onAmountChange(newAmount);
    setAmount(newAmount);
    localStorage.setItem(storageKey, newAmount);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      onAmountChange(newAmount);
      setAmount(newAmount);
      localStorage.setItem(storageKey, newAmount);
    }
  };

  const handleReset = () => {
    setAmount(1);
    onAmountChange(0);
    localStorage.setItem(storageKey, 1);
  };

  const handleOrder = () => {
    // Include any logic related to handling the order
    // You can navigate or perform other actions here
    if (Selection)
      console.log("Order placed for service:", id, "with amount:", amount);
  };

  return (
    <div
      style={{
        width: "362px",
        margin: "80px 0 0 90px ",
        border: "2px solid #ccc",
        borderRadius: "3rem",
        backgroundColor: "white",
        border: "4px solid #ddd",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={imageSrc}
        alt="Service"
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
          borderTopLeftRadius: "3rem",
          borderTopRightRadius: "3rem",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>Price: {price} birr</h3>
        <h3>Total Price: {amount * price} birr</h3>
        <p>Amount: {amount}</p>
        <div style={{ margin: "0px" }}>
          <button onClick={handleIncrement} style={{ margin: "5px" }}>
            +
          </button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset} style={{ margin: "5px" }}>
            Reset
          </button>

          <button
            onClick={handleOrder}
            style={{
              marginLeft: "60px",
              backgroundColor: "green",
              color: "white",
              margin: "10px",
            }}
          >
            <Link
              to={{
                pathname: `/cart/${id}`,
                state: { price, imageSrc, onAmountChange },
              }}
              style={{ color: "white" }}
            >
              add to cart
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
