import React from "react";
import imm from "../public/images/bbb.jpg";
import bini from "../public/images/545589.jpg";
import { useParams } from "react-router-dom";
import { productData as products } from "./data/data";
//import "../styles.css"; // Import your custom styles
const content = "content";

const Card = ({ producto }) => {
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
          height: "40rem",
          width: "30rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid silver",
          marginTop: "50px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ margin: "0px" }}>
          <img
            src={`/${producto.imageSrc}`}
            alt=""
            style={{
              height: "20rem",
              width: "30rem",
              margin: "",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            onLoad={() => console.log("Image loaded")}
          />

          <div style={{ margin: "25px" }}>
            <h3>{producto.content}</h3>
            <p> protine: {producto.protine}</p>
            <p>fat: {producto.fat}</p>
            <p>carbohaydrate: {producto.carbohaydrate}</p>
            <p>vitamins: {producto.vitamins}</p>
          </div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginRight: "300px",
            }}
          >
            price: birr {producto.price}
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
    (producto) => producto.id.toString() === params.id.toString()
  );

  return (
    <>
      {filterdProducts.map((bini) => (
        <Card key={bini.id} producto={bini} />
      ))}
    </>
  );
};

const App = () => {
  return (
    <div
    // style={{
    //   height: "100vh",
    //   width: "100%",
    //   backgroundImage: `url(${bini})`,
    //   backgroundSize: "cover",
    //   overflow: "hidden",
    // }}
    >
      <Details />
    </div>
  );
};

export default App;
