import React from "react";
import imm from "../public/images/bbb.jpg";
import bini from "../public/images/545589.jpg";
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
          height: "45rem",
          width: "35rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid silver",
          marginTop: "50px",
        }}
      >
        <div style={{ margin: "0px" }}>
          <img
            src={imageSrc}
            alt=""
            style={{
              height: "26rem",
              width: "35rem",
              margin: "",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />

          <div style={{ margin: "25px" }}>
            <h3>{content}</h3>
            <p> protine: {protine}</p>
            <p>fat: {fat}</p>
            <p>carbohaydrate: {carbohaydrate}</p>
            <p>vitamins: {vitamins}</p>
          </div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginRight: "400px",
            }}
          >
            price: birr {price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <>
      {detail.map((bini) => (
        <Card key={bini.id} imageSrc={bini.imageSrc} price={bini.price} />
      ))}
    </>
  );
};

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bini})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Details />
    </div>
  );
};

export default App;
