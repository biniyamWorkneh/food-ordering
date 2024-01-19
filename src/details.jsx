import React from "react";
import imm from "../public/images/bbb.jpg";
import bini from "../public/images/545589.jpg";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { productData as products } from "./data/data";
//import "../styles.css"; // Import your custom styles
const content = "content";

const Card = ({ producto }) => {
=======
//import "../styles.css"; // Import your custom styles
const content = "content";
const protine = "40%";
const carbohaydrate = "30%";
const fat = "5%";
const vitamins = "20%";
const detail = [
  {
    id: 1,
    imageSrc: imm,
    price: 100,
    content: "content",
    protine: "40%",
    carbohaydrate: "30%",
    fat: "5%",
    vitamins: "20%",
  },
];

const Card = ({ id, imageSrc, price }) => {
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
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
<<<<<<< HEAD
          height: "40rem",
          width: "30rem",
=======
          height: "45rem",
          width: "35rem",
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid silver",
          marginTop: "50px",
<<<<<<< HEAD
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
=======
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
        }}
      >
        <div style={{ margin: "0px" }}>
          <img
<<<<<<< HEAD
            src={`/${producto.imageSrc}`}
            alt=""
            style={{
              height: "20rem",
              width: "30rem",
=======
            src={imageSrc}
            alt=""
            style={{
              height: "26rem",
              width: "35rem",
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
              margin: "",
              borderRadius: "10px",
              overflow: "hidden",
            }}
<<<<<<< HEAD
            onLoad={() => console.log("Image loaded")}
          />

          <div style={{ margin: "25px" }}>
            <h3>{producto.content}</h3>
            <p> protine: {producto.protine}</p>
            <p>fat: {producto.fat}</p>
            <p>carbohaydrate: {producto.carbohaydrate}</p>
            <p>vitamins: {producto.vitamins}</p>
=======
          />

          <div style={{ margin: "25px" }}>
            <h3>{content}</h3>
            <p> protine: {protine}</p>
            <p>fat: {fat}</p>
            <p>carbohaydrate: {carbohaydrate}</p>
            <p>vitamins: {vitamins}</p>
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
          </div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
<<<<<<< HEAD
              marginRight: "300px",
            }}
          >
            price: birr {producto.price}
=======
              marginRight: "400px",
            }}
          >
            price: birr {price}
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
          </p>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
<<<<<<< HEAD
  const params = useParams();
  console.log(params.id);
  const filterdProducts = products.filter(
    (producto) => producto.id.toString() === params.id.toString()
  );

  return (
    <>
      {filterdProducts.map((bini) => (
        <Card key={bini.id} producto={bini} />
=======
  return (
    <>
      {detail.map((bini) => (
        <Card key={bini.id} imageSrc={bini.imageSrc} price={bini.price} />
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
      ))}
    </>
  );
};

const App = () => {
  return (
    <div
<<<<<<< HEAD
    // style={{
    //   height: "100vh",
    //   width: "100%",
    //   backgroundImage: `url(${bini})`,
    //   backgroundSize: "cover",
    //   overflow: "hidden",
    // }}
=======
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bini})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
    >
      <Details />
    </div>
  );
};

export default App;
