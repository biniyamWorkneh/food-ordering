import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import details from "./details";
import Payment from "./Payment";
import Footer from "./Footer";
import Orderus from "./Orderus";
<<<<<<< HEAD
import AllDetails from "./AllDetails";
=======
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
import Cart from "./Cart";
const RoutePage = () => {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/cart/:id" Component={Cart} />
        <Route exact path="/" Component={Home} />
        <Route path="/details" Component={AllDetails} />
=======
        <Route path="/cart" Component={Cart} />
        <Route exact path="/" Component={Home} />
        <Route path="/details" Component={details} />
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
        <Route path="/details/:id" Component={details} />
        <Route path="/orderus" Component={Orderus} />
        <Route path="/about" Component={About} />
        <Route path="/payment/:id" Component={Payment} />
        <Route path="/payment" Component={Payment} />
      </Routes>

      <Footer />
    </div>
  );
};

export default RoutePage;
