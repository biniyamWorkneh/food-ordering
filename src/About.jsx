import React from "react";
import GoogleMap from "./GoogleMap";
import ok from "../public/images/b.jpg";
<<<<<<< HEAD
// import bini from "../public/images/545589.jpg";
=======
import bini from "../public/images/545589.jpg";
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a

const Card = () => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "4rem",
<<<<<<< HEAD
        margin: "65px",
        border: "2px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
=======
        margin: "40px",
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
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
<<<<<<< HEAD
    // style={{
    //   minHeight: "100vh",
    //   backgroundImage: `url(${bini})`,
    //   backgroundSize: "cover",
    //   paddingTop: "50px",
    //   overflow: "hidden",
    // }}
=======
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bini})`,
        backgroundSize: "cover",
        paddingTop: "50px",
        overflow: "hidden",
      }}
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
    >
      <About />
      <GoogleMap />
    </div>
  );
};

export default App;
