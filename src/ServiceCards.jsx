import React, { useState } from "react";

const ServiceCard = (props) => {
  const [amountOne, setAmountOne] = useState(() => {
    const amtTwo = JSON.parse(localStorage.getItem("amount2"));
    return amtTwo ?? 1;
  });

  const [amountTwo, setAmountTwo] = useState(() => {
    const amtOne = JSON.parse(localStorage.getItem("amount1"));
    return amtOne ?? 1;
  });

  const [amountThree, setAmountThree] = useState(() => {
    const amtThree = JSON.parse(localStorage.getItem("amount3"));
    return amtThree ?? 1;
  });

  console.log("==============", props);

  const handleIncrement = () => {
    setAmountOne((prevAmount) => {
      const newAmount = prevAmount + 1;
      props.onAmountChange(newAmount);
      localStorage.setItem("amount1", newAmount);
      return newAmount;
    });

    setAmountTwo((prevAmount) => {
      const newAmount = prevAmount + 1;
      props.onAmountChange(newAmount);
      localStorage.setItem("amount2", newAmount);
      return newAmount;
    });

    setAmountThree((prevAmount) => {
      const newAmount = prevAmount + 1;
      props.onAmountChange(newAmount);
      localStorage.setItem("amount3", newAmount);
      return newAmount;
    });
  };

  const handleDecrement = () => {
    if (props.id === 1 && amountOne > 1) {
      setAmountOne((prevAmount) => {
        const newAmount = prevAmount - 1;
        props.onAmountChange(newAmount);
        localStorage.setItem("amount1", newAmount);
        return newAmount;
      });
    } else if (props.id === 2 && amountTwo > 1) {
      setAmountTwo((prevAmount) => {
        const newAmount = prevAmount - 1;
        props.onAmountChange(newAmount);
        localStorage.setItem("amount2", newAmount);
        return newAmount;
      });
    } else if (props.id === 3 && amountThree > 1) {
      setAmountThree((prevAmount) => {
        const newAmount = prevAmount - 1;
        props.onAmountChange(newAmount);
        localStorage.setItem("amount3", newAmount);
        return newAmount;
      });
    }
  };
  const Reset = () => {
    setAmountOne(1);
    setAmountTwo(1);
    setAmountThree(1);
    props.onAmountChange(0);
    localStorage.setItem("amount1", 1);
    localStorage.setItem("amount2", 1);
    localStorage.setItem("amount3", 1);
  };

  return (
    <div style={{ width: "340px", margin: "20px", border: "2px solid #ccc" }}>
      <img
        src={props.imageSrc}
        alt="Service"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3>Price: {props.price} birr</h3>
        <h3>
          Total Price:{" "}
          {props.id === 1
            ? amountOne * props.price
            : props.id === 2
            ? amountTwo * props.price
            : amountThree * props.price}
          birr
        </h3>
        <p>
          Amount:{" "}
          {props.id === 1
            ? amountOne
            : props.id === 2
            ? amountTwo
            : amountThree}
        </p>
        <div style={{ margin: "0px" }}>
          <button onClick={handleIncrement} style={{ margin: "5px" }}>
            +
          </button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={Reset} style={{ margin: "5px" }}>
            Reset
          </button>
          <button
            onClick={props.onSelect}
            style={{
              margin: "5px",
              backgroundColor: "blueviolet",
              color: "white",
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
