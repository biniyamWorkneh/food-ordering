import React from "react";
<<<<<<< HEAD
import imm from "../public/images/bbb.jpg";
import bini from "../public/images/545589.jpg";
import { useParams } from "react-router-dom";
import { services as products } from "./data2/data2";
//import "../styles.css"; // Import your custom styles
const content = "content";

const Card = ({ product }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "15rem",
          width: "40rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid silver",
          marginTop: "50px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ margin: "0px", position: "relative" }}>
          <img
            src={`/${product.imageSrc}`}
            alt=""
            style={{
              height: "15rem",
              width: "20rem",
              margin: "",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            onLoad={() => console.log("Image loaded")}
          />

          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginRight: "300px",
            }}
          >
            price: birr {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const params = useParams();
  console.log(params.id);
  const filterdProducts = products.filter(
    (product) => product.id.toString() === params.id.toString()
  );

  return (
    <>
      {filterdProducts.map((bini) => (
        <Card key={bini.id} product={bini} />
      ))}
    </>
  );
};

const App = () => {
  return (
    <div>
      <Details />
    </div>
  );
};

export default App;
=======

const Cart = () => {
  return <div>Cart</div>;
};

export default Cart;
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
