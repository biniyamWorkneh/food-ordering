import React from "react";
import GoogleMap from "./GoogleMap";
import ok from "../public/images/b.jpg";
// import bini from "../public/images/545589.jpg";

const Card = () => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "4rem",
        margin: "65px",
        border: "2px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={ok}
        className="card-img-top"
        alt="..."
        style={{
          width: "15rem",
          height: "14rem",
          borderTopLeftRadius: "4rem",
          borderBottomLeftRadius: "4rem",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const App = () => {
  return (
    <div
    // style={{
    //   minHeight: "100vh",
    //   backgroundImage: `url(${bini})`,
    //   backgroundSize: "cover",
    //   paddingTop: "50px",
    //   overflow: "hidden",
    // }}
    >
      <About />
      <GoogleMap />
    </div>
  );
};

export default App;
