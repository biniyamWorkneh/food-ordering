import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceCard = ({ id, imageSrc, price, intialAmount, onAmountChange }) => {
  const [amount, setAmount] = useState(intialAmount);

  

  

  const handleIncrement = () => {
    const newAmount = amount + 1;
   setAmount(newAmount)
  };

  const handleDecrement = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount)
    }
  };

  const handleChangeAmount = async () => {
    try {
      const response = await axios.post(`http://localhost:4500/update-amount/${id}`, { amount: amount });
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrder = async () => {
     handleChangeAmount()
     const response = await axios.post(`http://localhost:4500/update-cart/${id}`);
    console.log("Order placed for service:", id, "with amount:", amount);
  };

 

  return (
    <div
      style={{
        width: "362px",
        margin: "80px 0 0 90px",
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
          <button onClick={handleDecrement} style={{ margin: "5px" }}>
            -
          </button>
          <button onClick={handleIncrement} style={{ margin: "5px" }}>
            +
          </button>
          <button onClick={handleChangeAmount} style={{ margin: "5px" }}>
            Save
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
                pathname: `/cart`,
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
